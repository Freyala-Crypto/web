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

import FreyalaStakeAbi from "@/plugins/stakingArtifact.json";

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
      skip: 0,
      graveyard: 0
    }
  },
  async mounted() {
    const response = await axios({
      url   : 'https://info.freyala.com/api/exchange-rates/xya_1usdc',
      method: 'get',
    })

    this.$store.commit('SET_PRICE', response.data.rates.buy_rate)
    this.loadHolders('XYA', this.skip, this.first);

    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io/"));

    const freyalaStake = new web3.eth.Contract(FreyalaStakeAbi.abi, "0x861ef0cab3ab4a1372e7eda936668c8967f70110");
    this.totalStaked = parseInt(await freyalaStake.methods.totalStaked().call()) / 1000000000000000000
  },
  methods: {
    loadHolders(symbol, skip, first) {
      axios.post('https://faucet-api.freyala.com/holders', {symbol, skip, first}).then((result) => {
        if (result.data.data.tokens.length > 0) {
          result.data.data.tokens[0].holders.map((holder) => {
            if (holder.id.split('-')[0] === '0x861ef0cab3ab4a1372e7eda936668c8967f70110') {
              this.rewardPool = parseFloat(holder.amount) - parseFloat(this.totalStaked)
              this.totalMarketCap += parseInt(this.rewardPool)
              holder.amount = this.totalStaked
            }
            if (holder.id.split('-')[0] !== '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe' && holder.id.split('-')[0] !== '0x194e7650fe17c2c478cd6d147620790c9e811c3f' && holder.id.split('-')[0] !== '0x038eb501cef9d37e1a418ba28f66bd535123a6e7' && holder.id.split('-')[0] !== '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992' && holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
              this.circulatingMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.totalMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] === '0x000000000000000000000000000000000000dead' || holder.id.split('-')[0] === '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.graveyard += parseInt(holder.amount)
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
            if (holder.id.split('-')[0] === '0x861ef0cab3ab4a1372e7eda936668c8967f70110') {
              this.rewardPool = parseFloat(holder.amount) - parseFloat(this.totalStaked)
              this.totalMarketCap += parseInt(this.rewardPool)
              holder.amount = this.totalStaked
            }
            if (holder.id.split('-')[0] !== '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe' && holder.id.split('-')[0] !== '0x194e7650fe17c2c478cd6d147620790c9e811c3f' && holder.id.split('-')[0] !== '0x038eb501cef9d37e1a418ba28f66bd535123a6e7' && holder.id.split('-')[0] !== '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992' && holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
              this.circulatingMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.totalMarketCap += parseInt(holder.amount)
            }
            if (holder.id.split('-')[0] === '0x000000000000000000000000000000000000dead' || holder.id.split('-')[0] === '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4') {
              this.graveyard += parseInt(holder.amount)
            }

            holder.id = holder.id.split('-')[0]
          })

          if (result.data.data.tokens[0].holders.length > 0) {
            this.skip += 1000
            this.loadMoreHolders('XYA', this.skip, this.first)
          } else {
            this.$store.commit('SET_CURRENT_SUPPLY', this.circulatingMarketCap)
            this.$store.commit('SET_TOKEN_SUPPLY', this.totalMarketCap)
            this.$store.commit('SET_GRAVEYARD', this.graveyard)

            this.finishedFetchingHolders = true
          }
        }
      });
    },
  }
}
</script>