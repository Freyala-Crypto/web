<template>
  <div id="app">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import axios from 'axios'

import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'

export default {
  name: 'Homepage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      circulatingMarketCap: 0,
      totalMarketCap: 0,
      first: 1000,
      skip: 0
    }
  },
  async mounted() {
    const response = await axios({
      url   : 'https://info.freyala.com/api/exchange-rates/xya_1usdc',
      method: 'get',
    })

    this.$store.commit('SET_PRICE', response.data.rates.buy_rate)
    this.loadHolders('XYA', this.skip, this.first);
  },
  methods: {
    loadHolders(symbol, skip, first) {
      axios.post('https://faucet-api.freyala.com/holders', {symbol, skip, first}).then((result) => {
        if (result.data.data.tokens.length > 0) {
          result.data.data.tokens[0].holders.map((holder) => {
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
              this.circulatingMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.totalMarketCap += parseInt(holder.amount)
            }

            holder.id = holder.id.split('-')[0]
          })

          this.skip += 1000
          this.loadMoreHolders('XYA', this.skip, this.first)
        }
      });
    },
    loadMoreHolders(symbol, skip, first) {
      axios.post('https://faucet-api.freyala.com/holders', {symbol, skip, first}).then((result) => {
        if (result.data.data.tokens.length > 0) {
          result.data.data.tokens[0].holders.map((holder) => {
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
              this.circulatingMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.totalMarketCap += parseInt(holder.amount)
            }

            holder.id = holder.id.split('-')[0]
          })

          if (result.data.data.tokens[0].holders.length > 0) {
            this.skip += 1000
            this.loadMoreHolders('XYA', this.skip, this.first)
          } else {
            this.$store.commit('SET_CURRENT_SUPPLY', this.circulatingMarketCap)
            this.$store.commit('SET_TOKEN_SUPPLY', this.totalMarketCap)

            this.finishedFetchingHolders = true
          }
        }
      });
    },
  }
}
</script>