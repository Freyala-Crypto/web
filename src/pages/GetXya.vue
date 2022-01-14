<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
        <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Get your XYA!
        </h1>
      </div>
    </section>

    <section id="section-i-2" class="pb-24">
      <div class="container mx-auto flex flex-wrap py-12 lg:py-24 text-center">
        <div class="w-full lg:w-1/2 ">
          <p class="text-2xl lg:text-5xl font-extralight">
            <span class="font-semibold text-primary-alt">Ready to purchase XYA?</span>
            <br>
            Here’s how you can get started!
          </p>

          <br>
          <br>

          <div class="w-full flex flex-wrap mt-16">
            <div class="flex w-full lg:w-1/4">
              <img class="w-12 lg:w-32 mx-auto" src="/images/SVG/viperswap.svg" alt="Viperswap">
            </div>
            <a href="https://viperswap.one/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
               target="_blank" class="flex flex-wrap w-3/4 mt-8 mx-auto">
              <p class="w-full hidden lg:block text-2xl lg:text-5xl font-extralight">
                ViperSwap
              </p>
              <img class="my-auto w-20 hidden lg:block inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">
              <span class="uppercase my-auto mx-auto w-full lg:w-auto lg:ml-4 text-2xl font-semibold text-primary-alt">
                Viperswap
              </span>
            </a>
          </div>
          <div class="w-full flex flex-wrap mt-16">
            <div class="flex w-full lg:w-1/4">
              <img class="w-12 lg:w-32 mx-auto" src="/images/SVG/dfk.png" alt="Defi Kingdoms">
            </div>
            <a href="https://game.defikingdoms.com/#/" target="_blank" class="flex flex-wrap w-3/4 mt-8 mx-auto">
              <p class="w-full hidden lg:block text-2xl lg:text-5xl font-extralight">
                Defi Kingdoms
              </p>
              <img class="my-auto w-20 hidden lg:block inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">
              <span class="uppercase my-auto mx-auto w-full lg:w-auto lg:ml-4 text-2xl font-semibold text-primary-alt">
                Defi Kingdoms
              </span>
            </a>
          </div>
          <div class="w-full flex flex-wrap mt-16">
            <div class="flex w-full lg:w-1/4">
              <img class="w-12 lg:w-32 mx-auto" src="/images/SVG/lootswap.svg" alt="Lootswap">
            </div>
            <a href="https://lootswap.finance/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
               target="_blank" class="flex flex-wrap w-3/4 mt-8 mx-auto">
              <p class="w-full hidden lg:block text-2xl lg:text-5xl font-extralight">
                LootSwap
              </p>
              <img class="my-auto w-20 hidden lg:block inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">
              <span class="uppercase my-auto mx-auto w-full lg:w-auto lg:ml-4 text-2xl font-semibold text-primary-alt">
                Lootswap
              </span>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-12 mt-12 lg:mt-0">
          <div class="p-8 bg-gradient-to-r from-primary to-secondary w-full rounded-3xl">
            <p class="text-white text-2xl lg:text-4xl">
              How to add XYA to <span class="font-semibold">Metamask</span>:
            </p>

            <div class="text-2xl">
              <div class="text-white flex flex-wrap mt-12">
                <div class="w-1/6 hidden lg:block border-r border-white">
                  <p class="text-7xl">1</p>
                </div>
                <div class="w-full lg:w-5/6 lg:pl-8">
                  Add the Metamask Wallet extension to your Chrome browser and connect it to the Harmony network by
                  following these instructions: Metamask wallet documentation or use the Freyala wallet over at
                  https://app.freyala.com/
                </div>
              </div>
              <div class="text-white flex flex-wrap mt-12">
                <div class="w-1/6 hidden lg:block border-r border-white">
                  <p class="text-7xl">2</p>
                </div>
                <div class="w-full lg:w-5/6 lg:pl-8">
                  Find your ONE address and transfer your ONE from the exchange to the address. Note: You can use the
                  Harmony explorer to switch between ETH and ONE address formats.
                </div>
              </div>
              <div class="text-white flex flex-wrap mt-12">
                <div class="w-1/6 hidden lg:block border-r border-white">
                  <p class="text-7xl">3</p>
                </div>
                <div class="w-full lg:w-5/6 lg:pl-8">
                  Add XYA to the Metamask token list with this token contract address: <br>
                  <span class="font-semibold cursor-pointer" v-clipboard:copy="'0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4'"
                        style="word-break: break-all">0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4</span>
                </div>
              </div>
              <div class="text-white flex flex-wrap mt-12">
                <div class="w-1/6 hidden lg:block border-r border-white">
                  <p class="text-7xl">4</p>
                </div>
                <div class="w-full lg:w-5/6 lg:pl-8">
                  Go to one of the decentralized exchanges through the links on this page and swap your ONE for XYA!
                </div>
              </div>
              <div class="text-white flex flex-wrap mt-12">
                <div class="w-1/6 hidden lg:block border-r border-white">
                  <p class="text-7xl">5</p>
                </div>
                <div class="w-full lg:w-5/6 lg:pl-8">
                  Add your XYA to the liquidity pool to help the network, or wait for staking to be released to earn
                  more
                  Freyala ecosystems tokens!
                </div>
              </div>
            </div>

            <p class="text-center font-semibold text-2xl lg:text-4xl text-white mt-12">
              Stake & Earn XYA!
            </p>
          </div>
        </div>
      </div>
    </section>

    <looking-for-these-component/>

  </main>
</template>

<script>
import LookingForTheseComponent from '@/components/LookingForThese'

export default {
  name: 'Get XYA',
  components: {
    LookingForTheseComponent
  }
}
</script>