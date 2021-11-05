<template>
  <main>
    <section id="section-1">
      <div class="diagonal-1">
        <div style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right;">
          <div class="container mx-auto pt-32 flex flex-wrap">
            <div class="w-full lg:w-1/2 pt-48 pb-24">
              <h2 class="text-2xl lg:text-5xl font-thin pr-24">
                A fast and low-cost token built on the <span
                  class="font-semibold text-primary-alt">Harmony Blockchain</span>.
              </h2>

              <br>

              <p class="text-xl lg:text-4xl font-thin my-8">
                <span class="font-semibold">Freyala ($XYA)</span> is an HRC-20 token centered around integrating
                cryptocurrency in the form of gamified NFTs and decentralized applications.
              </p>

              <br>

              <a href="https://www.freyala.com/images/XYA_Whitepaper_V1.0.pdf" target="_blank">
                <button
                    class="uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-lg lg:text-xl text-semibold">
                  Read our whitepaper
                </button>
              </a>
              <br>
              <br>
              <router-link :to="{ name: 'get-xya' }">
                <button
                    class="uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-lg lg:text-xl text-semibold">
                  Ways to get XYA
                </button>
              </router-link>
            </div>
            <div class="w-full">
              <a class="flex" href="#section-2">
                <img class="w-16 mx-auto" src="/images/SVG/go-down.svg" alt="Scroll down">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section-2" class="mt-20">
      <div class="diagonal-2 pt-20">
        <div class="container mx-auto flex flex-wrap">
          <div class="w-full lg:w-1/2 ml-auto">
            <p class="text-2xl lg:text-5xl font-thin lg:pr-8">
              Creating a <span class="font-semibold text-primary-alt">beginner-friendly</span> means of using crypto.
            </p>
            <br>
            <p class="text-2xl lg:text-4xl font-thin my-8">
              The idea behind this project is to create a beginner-friendly means of using crypto with the power of
              low-cost and fast transactions on the Harmony blockchain.
              <br>
              <br>
              To start, we have launched an interactive app to enter the Freyala world.
            </p>
          </div>
        </div>
        <div class="relative flex flex-wrap bg-black lg:bg-transparent mt-12 lg:mt-0">
          <div class="container mx-auto pt-12 lg:pt-96">
            <div class="w-full lg:w-1/2 lg:pr-12">
              <p class="text-3xl lg:text-5xl font-thin my-8 text-white">
                Go to battle with your <span class="font-semibold text-primary-alt">Harmons!</span>
              </p>
              <br>
              <p class="text-2xl lg:text-4xl font-thin my-8 text-white">
                The core part of this ecosystem is CryptIDs, which are effectively monster collectible NFTs that players
                can purchase, trade and battle others with.
              </p>
            </div>
          </div>

          <div class="w-full lg:w-1/2 lg:absolute bottom-0 right-0">
            <img src="/images/PNG/harmons.png" alt="Harmons">
          </div>
        </div>

        <div class="container ml-auto flex flex-wrap mt-8 lg:mt-32 px-8 lg:px-24 py-12 bg-white rounded-l-3xl">
          <p class="text-3xl lg:text-5xl font-thin w-full">
            <span class="font-semibold text-primary-alt">Freyala</span> by the numbers:
          </p>

          <div class="w-full lg:w-1/2 lg:w-1/4 mt-12 text-center">
            <p class="text-3xl lg:text-5xl font-bold text-primary-alt">
              {{ $store.getters.loadingPrice ? 'Fetching...' : $store.getters.tokenSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="text-xl lg:text-3xl uppercase">
              Total token supply
            </p>
            <br>
            <hr>
            <br>
            <p class="text-3xl lg:text-5xl font-bold text-primary-alt">
              {{ $store.getters.loadingPrice ? 'Fetching...' : $store.getters.graveyard.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="text-xl lg:text-3xl uppercase">
              Tokens burnt
            </p>
            <br>
            <hr>
            <br>
            <p class="text-3xl lg:text-5xl font-bold text-primary-alt">
              $ {{ $store.getters.loadingPrice ? 'Fetching...' : parseFloat($store.getters.price).toFixed(3) }}
            </p>
            <p class="text-xl lg:text-3xl uppercase">
              Current price
            </p>
          </div>

          <div class="w-full lg:w-3/4 mt-12 lg:pl-20">
            <ul class="text-xl lg:text-3xl font-thin">
              <li>150M - In-game rewards</li>
              <li>52M - Upcoming partnerships, farming and casino</li>
              <li>21M - Community projects, events, hackathons and bounties</li>
              <li>15M - Initial coin offering</li>
              <li>4.5M - Development fund</li>
              <li>2.5M - Seed fund investors (span over a year)</li>
              <li>1M - Faucet fund</li>
            </ul>
          </div>

          <div class="w-full lg:w-1/4 mt-12">
            <div class="flex">
              <img class="my-auto w-20 inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">
              <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">
                <router-link :to="{ name: 'chart' }">
                  See live chart
                </router-link>
              </span>
            </div>
          </div>
          <div class="w-full lg:w-3/4 mt-12 pl-20">
            <!--            <div class="flex">-->
            <!--              <img class="my-auto w-20 inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">-->
            <!--              <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">-->
            <!--                More on Freyala tokenomics-->
            <!--              </span>-->
            <!--            </div>-->
          </div>
        </div>

        <div class="container mx-auto py-24 flex flex-wrap">
          <p class="w-full text-3xl lg:text-5xl text-white text-center">
            <span class="font-semibold text-primary-alt">
              Get XYA
            </span>
            from these DEXes built on the Harmony Blockchain:
          </p>

          <div class="w-full lg:w-1/3 flex flex-wrap mt-16">
            <div class="flex w-full">
              <img class="h-24 xl:h-48 mx-auto" src="/images/SVG/viperswap.svg" alt="Viperswap">
            </div>
            <div class="flex mt-8 mx-auto">
              <a href="https://viperswap.one/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
                 target="_blank">
                <img class="my-auto w-10 xl:w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">
                  Viperswap
                </span>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/3 flex flex-wrap mt-16">
            <div class="flex w-full">
              <img class="h-24 xl:h-48 mx-auto" src="/images/SVG/dfk.png" alt="Defi Kingdoms">
            </div>
            <div class="flex mt-8 mx-auto">
              <a href="https://game.defikingdoms.com/#/" target="_blank">
                <img class="my-auto w-10 xl:w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">
                  Defi Kingdoms
                </span>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/3 flex flex-wrap mt-16">
            <div class="flex w-full">
              <img class="h-24 xl:h-48 mx-auto" src="/images/SVG/lootswap.svg" alt="Lootswap">
            </div>
            <div class="flex mt-8 mx-auto">
              <a href="https://lootswap.finance/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
                 target="_blank">
                <img class="my-auto w-10 xl:w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">
                  Lootswap
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div style="background: url('/images/SVG/homepage-bg-roadmap.svg') no-repeat left center;">
      <section id="section-3" class="lg:pt-40">
        <div class="container mx-auto text-center mt-12">
          <p class="text-3xl lg:text-5xl font-thin">
            You can also get <span class="font-semibold text-primary-alt">free XYA</span> from the Freyala faucet!
          </p>

          <p class="text-xl lg:text-3xl font-thin my-16 w-full lg:w-2/3 mx-auto">
            Users can access an XYA faucet and instantly receive an amount of 0.75 XYA on a daily basis. No
            signing up is required beforehand.
          </p>

          <div class="mx-auto text-center">
            <router-link :to="{ name: 'faucet' }">
              <img class="my-auto w-20 inline" src="/images/SVG/arrow-right.svg" alt="Arrow right">
              <span class="hidden lg:block uppercase ml-4 text-2xl font-semibold text-primary-alt">
                Get XYA from the Freyala faucet
              </span>
              <span class="block lg:hidden uppercase ml-4 text-2xl font-semibold text-primary-alt">
                Get XYA from <br> the Freyala faucet
              </span>
            </router-link>
          </div>
        </div>
      </section>

      <section id="section-4" class="pt-20 lg:pt-40">
        <div class="container mx-auto bg-black rounded-3xl py-20">
          <p class="text-3xl lg:text-5xl text-white text-center">
            Current location on the <span class="font-semibold text-primary-alt">roadmap</span>.
          </p>

          <div class="w-full bg-gradient-to-r from-primary to-secondary my-12 lg:my-24 rounded-3xl lg:rounded-none">
            <div class="container mx-auto flex">
              <div class="w-3/4 mx-auto flex flex-wrap py-4">
                <div class="w-full lg:w-2/5 text-center lg:text-right my-auto">
                  <p class="text-3xl text-white font-extralight">Aggregation of materials</p>
                </div>
                <div class="w-full lg:w-1/5 text-center my-auto">
                  <img class="h-24 mx-auto" src="/images/SVG/loading-working-on.svg" alt="Currently working on logo">
                </div>
                <div class="w-full lg:w-2/5 text-center lg:text-left my-auto">
                  <p class="text-3xl text-white font-semibold">DEX AGGREGATOR</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto text-center">
            <router-link :to="{ name: 'roadmap' }">
              <img class="my-auto w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
              <br class="block lg:hidden">
              <span class="uppercase ml-4 text-2xl font-semibold text-primary-alt">
                See the full roadmap
              </span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Homepage'
}
</script>