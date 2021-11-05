<script src="../../../CryptoPunks/models/AttributeItem.js"></script>
<template>
  <div id="app">
    <header-component/>
    <router-view/>
    <footer-component/>
  </div>
</template>

<script>
import axios from 'axios'
import Web3 from 'web3'
import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'

import FreyalaAbi from "@/plugins/artifact.json";

export default {
  name: 'Homepage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      circulatingMarketCap: 450000000,
      totalMarketCap: 450000000,
      first: 1000,
      skip: 0,
      graveyard: 0,
      walletsToCheck: [
        '0x28d9475f6354091a49e20a897f6405a02ffd6836',
        '0x328983c8331a8ad6f08036f2983a8268f9e0f46d',
        '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe',
        '0x194e7650fe17c2c478cd6d147620790c9e811c3f',
        '0x038eb501cef9d37e1a418ba28f66bd535123a6e7',
        '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992',
        '0x000000000000000000000000000000000000dead',
        '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18',
        '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4',
        '0xbb4972a578266e0800d98f4248d057d6f6cde2bf'
      ],
      burnt: [
        '0x000000000000000000000000000000000000dead',
        '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4'
      ]
    }
  },
  async mounted() {
    this.getPrice()

    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io/"));
    const freyala = new web3.eth.Contract(FreyalaAbi.abi, "0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4");

    for (let i = 0; i < this.walletsToCheck.length; i++) {
      const balance = await freyala.methods.balanceOf(this.walletsToCheck[i]).call()
      this.circulatingMarketCap -= parseInt(balance) / 1000000000000000000
    }

    for (let i = 0; i < this.burnt.length; i++) {
      const balance = await freyala.methods.balanceOf(this.burnt[i]).call()
      this.totalMarketCap -= parseInt(balance) / 1000000000000000000
      this.graveyard += parseInt(balance) / 1000000000000000000
    }

    this.$store.commit('SET_CURRENT_SUPPLY', parseInt(this.circulatingMarketCap))
    this.$store.commit('SET_TOKEN_SUPPLY', parseInt(this.totalMarketCap))
    this.$store.commit('SET_GRAVEYARD', parseInt(this.graveyard))
    this.$store.commit('SET_LOADING_PRICE', false)
  },
  methods: {
    async getPrice() {
      const response = await axios({
        url: 'https://info.freyala.com/api/exchange-rates/xya_1usdc',
        method: 'get',
      })

      this.$store.commit('SET_PRICE', response.data.rates.buy_rate)
    }
  }
}
</script>