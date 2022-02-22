<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
         <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Faucet
        </h1>
      </div>
    </section>

    <section id="section-i-2">
      <div class="container mx-auto py-12 lg:py-24 text-center">
        <div class="w-full">
          <p class="text-2xl lg:text-5xl font-extralight">
            Get your daily <span class="font-semibold text-primary-alt">free dose of XYA</span> here!
          </p>
        </div>
      </div>
    </section>

    <section id="section-i-3">
      <div class="container w-full lg:w-3/4 xl:w-1/2 mx-auto pb-24">
        <div class="flex flex-wrap">
          <div class="w-full text-xl font-bold mb-8 text-center">
            <p>
              {{ error }}
            </p>
            <p>
              {{ msg }}
            </p>
          </div>
          <div v-if="msg === ''" class="w-full text-center">
            <button id="submit" class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
              The faucet is currently empty.
            </button>
          </div>
        </div><div class="w-full text-center">
      </div>
      </div>
    </section>

    <looking-for-these-component/>
  </main>
</template>

<script>
import LookingForTheseComponent from '@/components/LookingForThese'
import GFXFaucetAbi from "../plugins/faucetArtifact.json";
import { initWeb3 } from "@/plugins/initWeb3";

export default {
  name: 'Faucet',
  components: {
    LookingForTheseComponent
  },
  data() {
    return {
      input: '',
      accounts: [],
      MMerror: '',
      msg: '',
      error: '',
      loading: false,
      gasPrice: 0,
      gasLimit: 150000
    }
  },
  methods: {
    async requestFromFaucet() {
      this.loading = true

      let web3
      try {
        web3 = await initWeb3();
      } catch (err) {
        this.MMError = 'test';
        this.loading = false;
        return;
      }

      if (web3 === 'No MetaMask installed.') {
        this.MMError = 'No MetaMask installed.';
        return;
      }

      this.accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      if (networkId !== 1666600000) {
        this.MMError = "Please connect to the Harmony Mainnet";
        this.loading = false;
        return;
      }

      this.gasPrice = await web3.eth.getGasPrice();
      this.gameficrossingFaucet = new web3.eth.Contract(GFXFaucetAbi.abi, GFXFaucetAbi.address);

      const allowedToWithdraw = await this.gameficrossingFaucet.methods.allowedToWithdraw(this.accounts[0]).call()

      if (allowedToWithdraw) {
        await this.gameficrossingFaucet.methods.requestTokens().send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });

        this.msg = 'The kitchen has successfully sent you 0.75 XYA!'
      } else {
        this.msg = 'The kitchen has already given you your portion of soup in the past 24 hours. Come back later.'
      }


      this.loading = false;
    }
  }
}
</script>