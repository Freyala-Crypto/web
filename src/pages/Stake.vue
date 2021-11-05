<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
        <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Stake your XYA!
        </h1>
      </div>
    </section>

    <section class="w-full p-8 text-xl mx-auto bg-white text-black z-10 pb-48">
      <div v-if="!loggedIn" class="my-12 text-center">
        <button @click="connectToMetamask" class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
          Connect with metamask
        </button>

        <p class="text-2xl font-extralight">
          {{ MMError }}
        </p>
      </div>


      <div v-if="loggedIn" class="w-full xl:w-3/4 mx-auto">

        <div class="text-center" v-if="stakingLoading">
          <button class="px-6 py-3 bg-gradient-to-r from-primary to-secondary mx-auto text-white">
            Staking... (pending)
          </button>
        </div>
        <div class="text-center" v-if="unStakingLoading">
          <button class="px-6 py-3 bg-gradient-to-r from-primary to-secondary mx-auto text-white">
            Unstaking... (pending)
          </button>
        </div>
        <div class="text-center" v-if="withdrawLoading">
          <button class="px-6 py-3 bg-gradient-to-r from-primary to-secondary mx-auto text-white">
            Withdrawing... (pending)
          </button>
        </div>

        <div class="grid grid-col-1 lg:grid-cols-2 gap-6 mt-10">
          <div class="transform transition duration-300 shadow-xl rounded-lg intro-y bg-gradient-to-r from-primary to-secondary">
            <div class="p-5">
              <div class="flex justify-between">
                <div
                    class="bg-white rounded-full h-6 px-2 flex justify-items-center font-semibold text-sm">
                  <span class="flex text-black items-center">Staking</span>
                </div>
              </div>
              <div class="ml-2 w-full flex-1">
                <div>
                  <div class="mt-3 text-2xl text-white font-bold leading-8">
                    {{ ((parseFloat(stakes).toFixed(2)) / 1000000000000000000).toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="transform transition duration-300 shadow-xl rounded-lg  intro-y bg-gradient-to-r from-primary to-secondary">
            <div class="p-5">
              <div class="flex justify-between">
                <div
                    class="bg-white rounded-full h-6 px-2 flex justify-items-center font-semibold text-sm">
                  <span class="flex text-black items-center">Rewards</span>
                </div>
              </div>
              <div class="ml-2 w-full flex-1">
                <div>
                  <div class="mt-3 text-2xl text-white font-bold leading-8">
                    {{ (parseFloat(totalRewards) / 1000000000000000000).toFixed(2) }}
                  </div>

                  <div class="mt-1 text-base text-gray-600 cursor-pointer" @click="withdrawEarnings()">Claim rewards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-col-1 lg:grid-cols-2 gap-6 mt-10">
          <div>
            <div class="flex flex-col px-2">
              <div class="text-center pb-4">
                <span class="text-2xl text-black">Available amount:</span>
                <br>
                <span class="text-black text-3xl">{{
                    (parseFloat(stakingAccountBalance) / 1000000000000000000).toFixed(5)
                  }}</span>
                <span class="text-black text-3xl ml-2">XYA</span>
              </div>
              <div
                  class="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                <input
                    type="number"
                    placeholder="XYA to stake"
                    v-model="amountToStake"
                    class="text-black flex-shrink text-2xl w-full bg-transparent focus:outline-none"
                />
                <div v-if="amountToStake > 0">
                  <button v-if="!registrationStatus" @click="registerAndStake()"
                          class="flex flex-row items-center w-24 justify-center">
                    <span class="w-16">STAKE</span>
                  </button>
                  <button v-else @click="stake()" class="flex flex-row items-center w-24 justify-center">
                    <span class="w-16">STAKE</span>
                  </button>
                </div>
                <div v-else>
                  <button class="flex flex-row items-center w-24 justify-center">
                    <span class="w-16">STAKE</span>
                  </button>
                </div>
              </div>

              <div class="text-center mt-4">
                <button v-if="!registrationStatus" @click="registerAndStakeAll()" class="mx-auto tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
                  Stake all
                </button>
                <button v-else @click="stakeAll()" class="mx-auto tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
                  Stake all
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col px-2">
              <div class="text-center pb-4">
                  <span class="text-2xl text-black">
                    Available to unstake:
                  </span>
                <br>
                <span class="text-black text-3xl">{{ (parseFloat(stakes) / 1000000000000000000).toFixed(5) }}</span>
                <span class="text-black text-3xl ml-2">XYA</span>
              </div>
              <div
                  class="rounded-md border-2 border-primary p-2 flex justify-between items-center">
                <input
                    type="number"
                    placeholder="XYA to unstake"
                    v-model="amountToUnStake"
                    class="text-black flex-shrink text-2xl w-full bg-transparent focus:outline-none"/>
                <button v-if="amountToUnStake > 0" @click="unstake(false)"
                        class="flex flex-row items-center w-48 justify-center">
                  <span class="w-24">UNSTAKE</span>
                </button>
                <button v-else class="flex flex-row items-center w-48 justify-center">
                  <span class="w-24">UNSTAKE</span>
                </button>
              </div>

              <div class="text-center mt-4">
                <button @click="unstake(true)" class="mx-auto tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
                  Unstake all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="loggedIn" class="w-full xl:w-3/4 text-black text-center mt-12 mx-auto">
        <div v-if="errorMessage || error" class="mb-8">
            <span class="text-red text-lg" style="word-break: break-all">
              Error! Your transaction has been reverted! <br>
              {{ error }} <br>
              {{ errorMessage }}
            </span>
        </div>
        <div>
            <span class="text-black text-lg">
              Yearly return without claiming rewards: {{ ((parseFloat(dailyROI) / 1000) * 365).toFixed(2) }} %
            </span>
        </div>
        <div>
            <span class="text-black text-lg">
              Yearly return with monthly claims: {{
                ((Math.pow((1 + ((((parseFloat(dailyROI) / 1000) * 365) / 100) / 12)), 12) - 1) * 100).toFixed(2)
              }} %
            </span>
        </div>
        <div>
            <span class="text-black text-lg">
              Yearly return with daily claims: {{
                ((Math.pow((1 + ((((parseFloat(dailyROI) / 1000) * 365) / 100) / 365)), 365) - 1) * 100).toFixed(2)
              }} %
            </span>
        </div>
      </div>
    </section>

    <looking-for-these-component/>

  </main>
</template>

<script>
import fromExponential from "from-exponential";
import FreyalaTokenAbi from "../plugins/artifact.json";
import FreyalaStakeAbi from "../plugins/stakingArtifact.json";
import { initWeb3 } from "@/plugins/initWeb3";
import LookingForTheseComponent from '@/components/LookingForThese'

export default {
  name: "Staking",

  components: {
    LookingForTheseComponent
  },

  data: () => ({
    loggedIn: false,
    verifyError: '',
    password: '',
    networkId: undefined,
    stakes: undefined,
    stakingAccountBalance: undefined,
    totalSupply: undefined,
    minimumRegistrationCost: undefined,
    stakingRewards: undefined,
    totalRewards: undefined,
    registrationStatus: undefined,
    freyalaToken: undefined,
    freyalaStake: undefined,
    dailyROI: undefined,
    registrationTax: undefined,
    unStakingTax: undefined,
    stakingTax: undefined,
    minStake: undefined,
    totalStaked: undefined,
    status: undefined,
    referralCount: undefined,
    referralRewards: undefined,
    gasPrice: 1,
    gasLimit: 55000,
    stakingLoading: false,
    withdrawLoading: false,
    unStakingLoading: false,
    amountToStake: 0,
    amountToUnStake: 0,
    errorMessage: '',
    error: '',
    MMError: '',
    account: {},
    accountAddress: '',
    metaMaskAccount: ''
  }),

  mounted() {
    this.connectToMetamask()
  },

  methods: {
    async updateAll() {
      await Promise.all([
        this.updateStakes(),
        this.updateTotalSupply(),
        this.updateAccountBalance(),
        this.updateTotalStaked(),
        this.stakeRewards(),
        this.minRegisteration(),
        this.totalReward(),
        this.updateStatus()
      ]);
    },

    async connectToMetamask() {
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

      this.freyalaToken = new web3.eth.Contract(FreyalaTokenAbi.abi, "0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4");
      this.stakingAccountBalance = await this.freyalaToken.methods.balanceOf(this.accounts[0]).call();
      this.totalSupply = await this.freyalaToken.methods.totalSupply().call();

      this.freyalaStake = new web3.eth.Contract(FreyalaStakeAbi.abi, "0x861ef0CaB3ab4a1372E7eDa936668C8967F70110");
      this.referralRewards = await this.freyalaStake.methods.referralRewards(this.accounts[0]).call();
      this.referralCount = await this.freyalaStake.methods.referralCount(this.accounts[0]).call();
      this.status = await this.freyalaStake.methods.registered(this.accounts[0]).call();
      this.totalStaked = await this.freyalaStake.methods.totalStaked().call();
      this.minStake = await this.freyalaStake.methods.minimumStakeValue().call();
      this.stakingTax = await this.freyalaStake.methods.stakingTaxRate().call();
      this.unStakingTax = await this.freyalaStake.methods.unstakingTaxRate().call();
      this.registrationTax = await this.freyalaStake.methods.registrationTax().call();
      this.dailyROI = await this.freyalaStake.methods.dailyROI().call();

      this.loggedIn = true
      await this.updateAll()
      this.loading = false;
    },

    async updateStakes() {
      const stake = await this.freyalaStake.methods.stakes(this.accounts[0]).call();
      this.stakes = stake;
      return stake;
    },

    async updateAccountBalance() {
      if (this.freyalaToken) {
        const balance = await this.freyalaToken.methods.balanceOf(this.accounts[0]).call();
        this.stakingAccountBalance = balance;
        return balance;
      }
    },

    async updateTotalSupply() {
      if (this.freyalaToken) {
        const totalSupply = await this.freyalaToken.methods.totalSupply().call();
        this.totalSupply = totalSupply;
        return totalSupply;
      }
    },

    async updateTotalStaked() {
      if (this.freyalaStake) {
        return await this.freyalaStake.methods.totalStaked().call();
      }
    },

    async minRegisteration() {
      if (this.freyalaStake) {
        const tax = parseInt(await this.freyalaStake.methods.registrationTax().call());
        const value = parseInt(await this.freyalaStake.methods.minimumStakeValue().call());
        const sum = parseInt(tax / 1000000000000000000) + parseInt(value / 1000000000000000000);
        this.minimumRegistrationCost = sum;
        return sum;
      }
    },

    async stakeRewards() {
      if (this.freyalaStake) {
        const rewards = parseInt(await this.freyalaStake.methods.stakeRewards(this.accounts[0]).call());
        const owing = parseInt(await this.freyalaStake.methods.calculateEarnings(this.accounts[0]).call());
        const sum = rewards + owing;
        this.stakingRewards = sum;
        return sum;
      }
    },

    async totalReward() {
      const owing = parseInt(await this.freyalaStake.methods.calculateEarnings(this.accounts[0]).call());
      const recorded = parseInt(await this.freyalaStake.methods.stakeRewards(this.accounts[0]).call());
      const referral = parseInt(await this.freyalaStake.methods.referralRewards(this.accounts[0]).call());
      const sum = owing + referral + recorded;
      this.totalRewards = sum;
      return sum;
    },

    async updateStatus() {
      if (this.freyalaToken) {
        this.registrationStatus = await this.freyalaStake.methods.registered(this.accounts[0]).call();
      }
    },

    async registerAndStake() {
      this.error = ''
      this.stakingLoading = true;
      const actual = this.amountToStake * (10 ** 18);
      const arg = fromExponential(actual);
      try {
        let ref = "0x0000000000000000000000000000000000000000";

        await this.freyalaToken.methods.approve("0x861ef0CaB3ab4a1372E7eDa936668C8967F70110", arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.freyalaStake.methods.registerAndStake(arg, ref).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
        this.amountToStake = 0;
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.stakingLoading = false;
    },

    async registerAndStakeAll() {
      this.error = ''
      this.stakingLoading = true;
      const actual = await this.freyalaToken.methods.balanceOf(this.accounts[0]).call();
      const arg = fromExponential(actual);

      try {
        let ref = "0x0000000000000000000000000000000000000000";

        await this.freyalaToken.methods.approve("0x861ef0CaB3ab4a1372E7eDa936668C8967F70110", arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.freyalaStake.methods.registerAndStake(arg, ref).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
        this.amountToStake = 0;
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.stakingLoading = false;
    },

    async stakeAll() {
      this.error = ''
      this.stakingLoading = true;
      const actual = await this.freyalaToken.methods.balanceOf(this.accounts[0]).call();
      const arg = fromExponential(actual);

      try {
        await this.freyalaToken.methods.approve("0x861ef0CaB3ab4a1372E7eDa936668C8967F70110", arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.freyalaStake.methods.stake(arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
        this.amountToStake = 0;
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.stakingLoading = false;
    },

    async stake() {
      this.error = ''
      this.stakingLoading = true;
      const actual = this.amountToStake * (10 ** 18);
      const arg = fromExponential(actual);
      try {
        await this.freyalaToken.methods.approve("0x861ef0CaB3ab4a1372E7eDa936668C8967F70110", arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.freyalaStake.methods.stake(arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
        this.amountToStake = 0;
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.stakingLoading = false;
    },

    async unstake(all) {
      this.error = ''
      if (parseFloat(this.stakes) === 0) {
        this.error = "You don't have any staked XYA yet!"
        console.error("You don't have any staked XYA yet!");
        return;
      }

      let actual = 0

      if (all) {
        actual = this.stakes
      } else {
        actual = this.amountToUnStake * (10 ** 18);
      }

      this.unStakingLoading = true;
      const arg = fromExponential(actual);
      try {
        await this.freyalaStake.methods.unstake(arg).send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
        this.amountToUnStake = 0;
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.unStakingLoading = false;
    },

    async withdrawEarnings() {
      this.error = ''
      if (parseFloat(this.totalRewards) === 0) {
        this.error = "No earnings yet!"
        console.error("No earnings yet!");
        return;
      }
      this.withdrawLoading = true;
      try {
        await this.freyalaStake.methods.withdrawEarnings().send({
          from: this.accounts[0],
          gasPrice: this.gasPrice,
          gasLimit: this.gasLimit,
          gas: parseFloat((this.gasPrice * this.gasLimit) / Math.pow(10, 9))
        });
        await this.updateAll();
      } catch (err) {
        if (err.code !== 4001) {
          this.error = err
        }
        console.error(err);
      }
      this.withdrawLoading = false;
    }
  }
};
</script>