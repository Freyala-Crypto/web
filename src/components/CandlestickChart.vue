<template>
  <div class="w-full">
    <div class="w-full flex justify-center">
      <div class="mb-6 p-1 rounded-lg flex bg-gradient-to-r from-primary to-secondary text-white text-lg">
        <div v-for="resolution in ['15', '30', '1D', '1W', '1M']" class="p-1 w-10 rounded hover:bg-white hover:text-primary cursor-pointer" v-bind:class="resolutionIsActive(resolution)" @click="setResolution(resolution)">
          {{ resolution }}
        </div>
      </div>
    </div>

    <div id="chart" class="w-full h-96" ref="chart"></div>
  </div>
</template>

<script>
import {createChart} from 'lightweight-charts'
import axios from 'axios'

export default {
  data()
  {
    return {
      chart                 : null,
      resolution            : '30',
      candlestickApiBasePath: 'https://info.freyala.com/api/candlesticks/xya_1usdc/',
      // volumeApiBasePath     : 'https://info.freyala.com/',
      watermarkColor   : '#E6E6E6',
      watermarkText    : '',
      title            : 'XYA',
      defaultResolution: '30',
      upColor          : '#54B67A',
      downColor        : '#54B67A',
      backgroundColor  : 'rgba(255, 255, 255, 0.01)',
      textColor        : '#000000',
      lineColor        : 'rgba(84, 182, 122, 0.2)',
      volumeColor      : '#1A1A1A',
    }
  },

  mounted: function () {
    this.chart = createChart(this.$refs.chart, {
      width          : this.$refs.chart.offsetWidth,
      height         : this.$refs.chart.offsetHeight,
      watermark      : {
        visible  : true,
        fontSize : 20,
        horzAlign: 'center',
        vertAlign: 'center',
        color    : this.watermarkColor,
        text     : this.watermarkText,
      },
      TickMarkType   : 'Time',
      localization   : {
        dateFormat: 'yyyy/MM/dd',
        locale    : 'en-US',
      },
      rightPriceScale: {
        borderVisible: false,
        scaleMargins : {
          top   : 0.1,
          bottom: 0.1,
        },
      },
      timeScale      : {
        borderVisible : false,
        visible       : true,
        timeVisible   : true,
        secondsVisible: true,
      }
    })

    this.candlestickSeries = this.chart.addCandlestickSeries({
      upColor        : this.upColor,
      downColor      : '#FFFFFF',
      borderUpColor  : this.upColor,
      borderDownColor: this.downColor,
      wickUpColor    : this.upColor,
      wickDownColor  : this.downColor,
      title          : this.title,
      priceFormat    : {
        type     : 'price',
        precision: 4,
        minMove  : 0.0001,
      },
    })

    let theme = {
      chart: {
        layout: {
          backgroundColor: this.backgroundColor,
          textColor      : this.textColor,
        },
        grid  : {
          vertLines: {
            color  : this.lineColor,
            style  : 0,
            visible: true,
          },
          horzLines: {
            color  : this.lineColor,
            style  : 0,
            visible: true,
          },
        },
      },
    }
    this.chart.applyOptions(theme.chart)

    // this.volumeSeries = this.chart.addHistogramSeries({
    //     color       : this.volumeColor,
    //     base        : 0,
    //     priceFormat : {
    //         type: 'volume',
    //     },
    //     priceScaleId: '',
    //     scaleMargins: {
    //         top   : 0.9,
    //         bottom: 0,
    //     },
    // });

    this.setData(this.resolution)

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect
      this.resize(cr.width, cr.height)
    })

    ro.observe(this.$refs.chart)

    window.addEventListener('resize', () => {
      this.chart.resize(this.$refs.chart.offsetWidth, this.$refs.chart.offsetHeight)
    })

    // let markers = require('../markers.json');
    // this.candlestickSeries.setMarkers(markers);

    window.setInterval(() => {
      this.updateData(this.resolution)
    }, 30000)
  },

  methods: {
    resize(width, height)
    {
      this.chart.resize(width, height)
    },

    setData(resolution)
    {
      let candlestickSeries = this.candlestickSeries
      // let volumeSeries      = this.volumeSeries;

      axios
          .get(`${this.candlestickApiBasePath}${resolution}`)
          .then(function (response) {
            candlestickSeries.setData(response.data)
          })

      // axios
      //     .get(`${this.volumeApiBasePath}`)
      //     .then(function (response) {
      //         volumeSeries.setData(response.data);
      //     });

    },

    updateData(resolution)
    {
      this.setData(resolution)
    },

    setResolution(resolution)
    {
      this.updateData(resolution)

      this.resolution = resolution
    },

    resolutionIsActive(resolution)
    {
      let activeClass = 'bg-white text-primary'

      if (this.resolution !== resolution) {
        activeClass = ''
      }

      return activeClass
    }
  }
}
</script>
