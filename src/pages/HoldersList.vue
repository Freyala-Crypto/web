<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
        <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Holders list
        </h1>
      </div>
    </section>

    <section id="section-i-2">
      <div class="container mx-auto pt-12 pb-24 text-2xl lg:text-3xl font-extralight">
        <div class="flex flex-wrap">
          <div class="w-full">
            <h4>MARKETCAP: <br class="block lg:hidden">
              <span class="font-semibold text-primary-alt">${{
                  (circulatingMarketCap * $store.getters.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</span></h4>
            <br class="block lg:hidden">
            <h4>CIRCULATING SUPPLY: <br class="block lg:hidden">
              <span class="font-semibold text-primary-alt">{{
                  circulatingMarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</span></h4>
            <br class="block lg:hidden">
            <h4>TOTAL SUPPLY: <br class="block lg:hidden">
              <span class="font-semibold text-primary-alt">{{
                  totalMarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</span></h4>
            <br class="block lg:hidden">
            <small>* Address percentages are calculated over circulating supply</small> <br>
          </div>
        </div>
        <br>

        <div v-if="finishedFetchingHolders === false" class="message-empty text-3xl">Loading holders...</div>
        <div v-else-if="holders.length === 0" class="message-empty text-3xl">No holders yet</div>

        <div v-else>
          <div class="hidden lg:block">
            <div class="flex pb-4 text-4xl text-primary-alt font-semibold">
              <div class="w-2/3">Address</div>
              <div class="w-1/6">Amount</div>
              <div class="w-1/6 text-right">Percentage</div>
            </div>
            <div class="transfer flex text-2xl mb-2">
              <div class="w-2/3">
                GameFi Crossing graveyard
              </div>
              <div class="w-1/6">{{ parseFloat(graveyard).toFixed(5) }}</div>
              <div class="w-1/6 text-right">-</div>
            </div>
            <div class="transfer flex text-2xl mb-2">
              <div class="w-2/3">
                GameFi Crossing staking reward pool
              </div>
              <div class="w-1/6">{{ parseFloat(rewardPool).toFixed(5) }}</div>
              <div class="w-1/6 text-right">-</div>
            </div>

            <div
                class="transfer flex text-2xl mb-2"
                v-for="holder in data"
                :key="holder.id"
                v-if="holder.id !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id !== '0x000000000000000000000000000000000000dead'"
            >
              <div v-if="holder.id === '0x1485a496f816f940c510d634e48f8c66b78dc99e'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Viperswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0x861ef0cab3ab4a1372e7eda936668c8967f70110'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing single staking pool
                </a>
              </div>
              <div v-else-if="holder.id === '0xd211b33df63466d4cf4d8bad66f06d4ef7f0b581'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Mochiswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0xf6938abb05f01d6089561fbf14121e3223ab43ba'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Lootswap liquidity staking pair (LP)
                </a>
              </div>
              <div v-else-if="holder.id === '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing faucet backup
                </a>
              </div>
              <div v-else-if="holder.id === '0x194e7650fe17c2c478cd6d147620790c9e811c3f'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing mines (JENNY)
                </a>
              </div>
              <div v-else-if="holder.id === '0x28d9475f6354091a49e20a897f6405a02ffd6836'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette low stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x038eb501cef9d37e1a418ba28f66bd535123a6e7'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette medium stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x328983c8331a8ad6f08036f2983a8268f9e0f46d'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette high stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Coinflip house
                </a>
              </div>
              <div v-else-if="holder.id === '0xfacdddf6f59abee55f19f47698356d9de036e871'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Lootswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0x4e316a569a7807884fd53ccd043c66185f54659f'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Openswap liquidity pool pair
                </a>
              </div>
              <!--              <div v-else-if="holder.id === '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4'"-->
              <!--                   class="w-2/3">-->
              <!--                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">-->
              <!--                  GameFi Crossing graveyard-->
              <!--                </a>-->
              <!--              </div>-->
              <!--              <div v-else-if="holder.id === '0x000000000000000000000000000000000000dead'"-->
              <!--                   class="w-2/3">-->
              <!--                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">-->
              <!--                  GameFi Crossing graveyard-->
              <!--                </a>-->
              <!--              </div>-->
              <div v-else-if="holder.id === '0xbb4972a578266e0800d98f4248d057d6f6cde2bf'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing supply
                </a>
              </div>
              <div v-else-if="holder.id === '0x9aa78983e7e4ae0873235c44cae53bb63f594ca6'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing development fund
                </a>
              </div>
              <div v-else-if="holder.id === '0xdc607e3cfb286eb8176fbc2e3f86f0c5ce6f8523'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  XYA-JENN liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18'"
                   class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing Kraken's den (Time locked tokens (FEB62022))
                </a>
              </div>
              <div v-else class="w-2/3">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  {{ compressAddress(holder.id) }}
                </a>
              </div>
              <div class="w-1/6">{{ parseFloat(holder.amount).toFixed(5) }}</div>
              <div v-if="holder.id === '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4'" class="w-1/6 text-right">-</div>
              <div v-else-if="holder.id === '0xbb4972a578266e0800d98f4248d057d6f6cde2bf'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x038eb501cef9d37e1a418ba28f66bd535123a6e7'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x194e7650fe17c2c478cd6d147620790c9e811c3f'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x000000000000000000000000000000000000dead'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x28d9475f6354091a49e20a897f6405a02ffd6836'" class="w-1/6 text-right">-
              </div>
              <div v-else-if="holder.id === '0x328983c8331a8ad6f08036f2983a8268f9e0f46d'" class="w-1/6 text-right">-
              </div>
              <div v-else class="w-1/6 text-right">
                {{ ((100 * parseFloat(holder.amount)) / parseFloat(circulatingMarketCap)).toFixed(2) }}%
              </div>
            </div>
          </div>
          <div class="block lg:hidden">
            <div class="transfer flex flex-wrap text-2xl mb-2">
              <div class="flex text-primary-alt font-semibold">
                <div class="w-full">Address</div>
              </div>
              <div class="w-full">GameFi Crossing graveyard</div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Amount</div>
              </div>
              <div class="w-full">{{ parseFloat(graveyard).toFixed(5) }}</div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Percentage</div>
              </div>
              <div class="w-full">-</div>
            </div>
            <div class="transfer flex flex-wrap text-2xl mb-2">
              <div class="flex text-primary-alt font-semibold">
                <div class="w-full">Address</div>
              </div>
              <div class="w-full">GameFi Crossing staking reward pool</div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Amount</div>
              </div>
              <div class="w-full">{{ parseFloat(rewardPool).toFixed(5) }}</div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Percentage</div>
              </div>
              <div class="w-full">-</div>
            </div>

            <div
                class="transfer flex flex-wrap text-2xl mb-2"
                v-for="holder in data"
                :key="holder.id"
                v-if="holder.id !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id !== '0x000000000000000000000000000000000000dead'"
            >

              <div class="flex pt-8 text-primary-alt font-semibold">
                <div class="w-full">Address</div>
              </div>
              <div v-if="holder.id === '0x1485a496f816f940c510d634e48f8c66b78dc99e'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Viperswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0x861ef0cab3ab4a1372e7eda936668c8967f70110'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing single staking pool
                </a>
              </div>
              <div v-else-if="holder.id === '0xd211b33df63466d4cf4d8bad66f06d4ef7f0b581'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Mochiswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0xf6938abb05f01d6089561fbf14121e3223ab43ba'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Lootswap liquidity staking pair (LP)
                </a>
              </div>
              <div v-else-if="holder.id === '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing faucet backup
                </a>
              </div>
              <div v-else-if="holder.id === '0xfacdddf6f59abee55f19f47698356d9de036e871'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Lootswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0x4e316a569a7807884fd53ccd043c66185f54659f'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Openswap liquidity pool pair
                </a>
              </div>
              <div v-else-if="holder.id === '0xbb4972a578266e0800d98f4248d057d6f6cde2bf'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing supply
                </a>
              </div>
              <div v-else-if="holder.id === '0x28d9475f6354091a49e20a897f6405a02ffd6836'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette low stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x038eb501cef9d37e1a418ba28f66bd535123a6e7'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette medium stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x328983c8331a8ad6f08036f2983a8268f9e0f46d'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Roulette high stakes house
                </a>
              </div>
              <div v-else-if="holder.id === '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Coinflip house
                </a>
              </div>
              <div v-else-if="holder.id === '0x9aa78983e7e4ae0873235c44cae53bb63f594ca6'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing development fund
                </a>
              </div>
              <div v-else-if="holder.id === '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing Kraken's den (Time locked tokens (FEB62022))
                </a>
              </div>
              <div v-else-if="holder.id === '0x194e7650fe17c2c478cd6d147620790c9e811c3f'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  GameFi Crossing mines (JENNY)
                </a>
              </div>
              <div v-else-if="holder.id === '0xdc607e3cfb286eb8176fbc2e3f86f0c5ce6f8523'"
                   class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  Viperswap XYA-JENN liquidity pool pair
                </a>
              </div>
              <div v-else class="w-full">
                <a :href="`https://explorer.harmony.one/#/address/${holder.id}`" target="_blank">
                  {{ compressAddress(holder.id) }}
                </a>
              </div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Amount</div>
              </div>
              <div class="w-full">{{ parseFloat(holder.amount).toFixed(5) }}</div>

              <div class="flex pt-4 text-primary-alt font-semibold">
                <div class="w-full">Percentage</div>
              </div>
              <div v-if="holder.id === '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x038eb501cef9d37e1a418ba28f66bd535123a6e7'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x28d9475f6354091a49e20a897f6405a02ffd6836'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x038eb501cef9d37e1a418ba28f66bd535123a6e7'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x194e7650fe17c2c478cd6d147620790c9e811c3f'" class="w-full">-</div>
              <div v-else-if="holder.id === '0xbb4972a578266e0800d98f4248d057d6f6cde2bf'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18'" class="w-full">-</div>
              <div v-else-if="holder.id === '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe'" class="w-full">-</div>
              <div v-else-if="holder.id === '0x000000000000000000000000000000000000dead'" class="w-full">-
              </div>
              <div v-else class="w-full">
                {{ ((100 * parseFloat(holder.amount)) / parseFloat(circulatingMarketCap)).toFixed(2) }}%
              </div>
            </div>
          </div>

          <div class="w-full flex mt-8">
            <button
                class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-2 lg:py-4 px-2 lg:px-8 rounded-md text-white text-sm lg:text-xl font-semibold"
                v-if="previous_page !== null" @click="paginate(previous_page)">Previous page
            </button>
            <button
                class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary ml-auto py-2 lg:py-4 px-2 lg:px-8 rounded-md text-white text-sm lg:text-xl font-semibold"
                v-if="next_page !== null" @click="paginate(next_page)">Next page
            </button>
          </div>
        </div>
      </div>
    </section>

    <looking-for-these-component/>

  </main>
</template>

<script>
import axios from 'axios';

const {Unit} = require("@harmony-js/utils");
import LookingForTheseComponent from '@/components/LookingForThese'

import GFXStakeAbi from "@/plugins/stakingArtifact.json";

export default {
  components: {
    LookingForTheseComponent
  },

  data: () => ({
    paginate_page: undefined,
    per_page: undefined,
    previous_page: undefined,
    next_page: undefined,
    total: undefined,
    total_pages: undefined,
    limit: 100,
    txCount: 1,
    page: 0,
    data: 0,
    loadMoreLoading: false,
    holders: 'loading',
    circulatingMarketCap: 0,
    totalMarketCap: 0,
    finishedFetchingHolders: false,
    first: 1000,
    skip: 0,
    addressValue: '',
    lookedUpAddressBalance: undefined,
    graveyard: 0,
    totalStaked: 0,
    rewardPool: 0,
    accounts: [],
    MMError: '',
    loading: false,
    gameficrossingStake: {}
  }),

  async mounted() {
    this.loadHolders('XYA', this.skip, this.first);

    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io/"));

    const gameficrossingStake = new web3.eth.Contract(GFXStakeAbi.abi, "0x861ef0cab3ab4a1372e7eda936668c8967f70110");
    this.totalStaked = parseInt(await gameficrossingStake.methods.totalStaked().call()) / 1000000000000000000
  },

  methods: {
    loadHolders(symbol, skip, first) {
      axios.post('https://faucet-api.gameficrossing.com/holders', {symbol, skip, first}).then((result) => {
        if (result.data.data.tokens.length > 0) {
          result.data.data.tokens[0].holders.map((holder) => {
            if (holder.id.split('-')[0] === '0x861ef0cab3ab4a1372e7eda936668c8967f70110') {
              this.rewardPool = parseFloat(holder.amount) - parseFloat(this.totalStaked)
              this.totalMarketCap += parseInt(this.rewardPool)
              holder.amount = this.totalStaked
            }
            if (holder.id.split('-')[0] !== '0x28d9475f6354091a49e20a897f6405a02ffd6836' && holder.id.split('-')[0] !== '0x328983c8331a8ad6f08036f2983a8268f9e0f46d' && holder.id.split('-')[0] !== '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe' && holder.id.split('-')[0] !== '0x194e7650fe17c2c478cd6d147620790c9e811c3f' && holder.id.split('-')[0] !== '0x038eb501cef9d37e1a418ba28f66bd535123a6e7' && holder.id.split('-')[0] !== '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992' && holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
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

          this.holders = result.data.data.tokens[0].holders
          this.skip += 1000
          this.loadMoreHolders('XYA', this.skip, this.first)
        } else {
          this.holders = []
        }
      });
    },

    loadMoreHolders(symbol, skip, first) {
      axios.post('https://faucet-api.gameficrossing.com/holders', {symbol, skip, first}).then((result) => {
        if (result.data.data.tokens.length > 0) {
          result.data.data.tokens[0].holders.map((holder) => {
            if (holder.id.split('-')[0] === '0x861ef0cab3ab4a1372e7eda936668c8967f70110') {
              this.rewardPool = parseFloat(holder.amount) - parseFloat(this.totalStaked)
              this.totalMarketCap += parseInt(this.rewardPool)
              holder.amount = this.totalStaked
            }
            if (holder.id.split('-')[0] !== '0x28d9475f6354091a49e20a897f6405a02ffd6836' && holder.id.split('-')[0] !== '0x328983c8331a8ad6f08036f2983a8268f9e0f46d' && holder.id.split('-')[0] !== '0xfef8bd2e06d8117e51ce7b960992e4055997d9fe' && holder.id.split('-')[0] !== '0x194e7650fe17c2c478cd6d147620790c9e811c3f' && holder.id.split('-')[0] !== '0x038eb501cef9d37e1a418ba28f66bd535123a6e7' && holder.id.split('-')[0] !== '0x2b9f62ac65bcf956b6e15ec427456b2cf3a51992' && holder.id.split('-')[0] !== '0x000000000000000000000000000000000000dead' && holder.id.split('-')[0] !== '0x48a30b33ebd0afac1d8023e06e17372c21c0fb18' && holder.id.split('-')[0] !== '0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4' && holder.id.split('-')[0] !== '0xbb4972a578266e0800d98f4248d057d6f6cde2bf') {
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

          result.data.data.tokens[0].holders.map((holder) => {
            this.holders.push(holder)
          })

          if (result.data.data.tokens[0].holders.length > 0) {
            this.skip += 1000
            this.loadMoreHolders('XYA', this.skip, this.first)
          } else {
            this.finishedFetchingHolders = true
            this.paginate()
          }
        } else {

          this.holders = []
        }
      });
    },

    formatTokenAmount(transfer) {
      return new Unit(transfer.value)
          .asWei()
          .toEther()
          .toString();
    },

    compressAddress(address) {
      return (
          address.substr(0, 10) +
          "..." +
          address.substr(address.length - 5, address.length)
      );
    },

    formatShard(transfer) {
      return (
          " from shard " +
          transfer.shardID.toString() +
          " to shard " +
          transfer.toShardID.toString()
      );
    },

    paginate(current_page) {
      let page = current_page || 1,
          per_page = 25,
          offset = (page - 1) * per_page,

          paginatedItems = [...this.holders].sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount)).slice(offset).slice(0, 25),
          total_pages = Math.ceil(this.holders.length / per_page);

      this.page = page
      this.per_page = per_page
      this.previous_page = page - 1 ? page - 1 : null
      this.next_page = (total_pages > page) ? page + 1 : null
      this.total = this.holders.length
      this.total_pages = total_pages
      this.data = paginatedItems
    }
  }
};
</script>