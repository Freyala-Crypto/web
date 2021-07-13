<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt" style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
         <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Stability meter
        </h1>
      </div>
    </section>

    <section id="section-i-2">
      <div class="container mx-auto py-12 lg:py-24 text-center">
        <div class="w-full">
          <p class="text-2xl lg:text-5xl font-extralight">
            See where <span class="font-semibold text-primary-alt">XYA</span> is heading to!
          </p>

          <br>

          <candlestick-chart-component></candlestick-chart-component>
        </div>
      </div>
    </section>

    <section id="section-i-3">
      <div class="container mx-auto py-24">

      </div>
    </section>

    <looking-for-these-component/>

  </main>
</template>

<script>
import LookingForTheseComponent from '@/components/LookingForThese'
import CandlestickChartComponent from '@/components/CandlestickChart'

export default {
  name      : 'Chart',
  components: {
    LookingForTheseComponent,
    CandlestickChartComponent
  }
}
</script>