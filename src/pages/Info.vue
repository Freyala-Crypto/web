<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
        <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Info
        </h1>
      </div>
    </section>

    <section id="section-i-2">
      <div class="container mx-auto py-12 lg:py-24">
        <div class="w-full xl:w-3/4">
          <p class="text-2xl lg:text-5xl font-extralight">
            What is Freyala <span class="font-semibold text-primary-alt">(XYA)</span> ?
          </p>

          <br>
          <br>

          <p class="text-xl lg:text-4xl font-extralight">
            Freyala ($XYA) is an HRC-20 token built on the Harmony blockchain.
            <br>
            <br>
            The idea behind this project is to create a beginner-friendly means of using crypto with the power of
            low-cost and fast transactions on the Harmony blockchain.
            <br>
            <br>
            The core part of this ecosystem is CryptIDs, which are effectively monster collectible NFTs that players can
            purchase, trade and battle others with.
          </p>
        </div>
        <div class="w-1/4"></div>
      </div>

      <div class="w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
    </section>

    <section id="section-i-3" class="bg-black pb-12 lg:pb-24">
      <div class="container mx-auto flex flex-wrap py-12 lg:py-24">
        <p class="text-white w-full font-extralight text-3xl lg:text-5xl">
          Freyala <span class="font-semibold text-primary-alt">Tokenomics</span>
        </p>

        <div class="w-full lg:w-3/4 mt-12 lg:pr-20">
          <ul class="text-xl lg:text-3xl text-white font-extralight">
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
          <hr class="border-primary-alt">
          <br>
          <br>

          <p class="text-xl lg:text-2xl font-extralight text-primary-alt">
            Please note that the figures mentioned are subject to change depending on future burns.
            <br>
            <br>
            XYA is also non-mintable, meaning that there is a hard cap.
          </p>

          <br>
          <br>
          <hr class="border-primary-alt">
        </div>

        <div class="w-full flex flex-wrap mt-20 text-center">
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <p class="text-3xl lg:text-6xl font-bold text-primary-alt">
              {{ $store.getters.loadingPrice ? 'Fetching...' : $store.getters.tokenSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="text-xl lg:text-3xl uppercase text-white mt-8">
              Total token supply
            </p>
          </div>
          <div class="w-full lg:w-1/2 mb-4 lg:mb-">
            <p class="text-3xl lg:text-6xl font-bold text-primary-alt">
              {{ $store.getters.loadingPrice ? 'Fetching...' : $store.getters.currentSupply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="text-xl lg:text-3xl uppercase text-white mt-8">
              Circulating token supply
            </p>
          </div>
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <p class="text-3xl lg:text-6xl font-bold text-primary-alt">
              {{ $store.getters.loadingPrice ? 'Fetching...' : $store.getters.graveyard.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="text-xl lg:text-3xl uppercase text-white mt-8">
              Tokens burnt
            </p>
          </div>
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
            <p class="text-3xl lg:text-6xl font-bold text-primary-alt">
              $ {{ $store.getters.loadingPrice ? 'Fetching...' : parseFloat($store.getters.price).toFixed(3) }}
            </p>
            <p class="text-xl lg:text-3xl uppercase text-white mt-8">
              Current price
            </p>
          </div>
        </div>

        <div class="w-full my-auto text-center mt-12">
          <p class="text-white text-2xl">
            <span class="text-primary-alt cursor-pointer"
                  v-clipboard:copy="'0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4'">Contract address:</span> <br
              class="block lg:hidden"> <span
              style="word-break: break-all" class="cursor-pointer"
              v-clipboard:copy="'0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4'">0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4</span>
            <img src="/images/SVG/copy.svg" alt="Copy" class="inline pl-2 w-8">
          </p>
        </div>

      </div>

      <div
          class="container mx-auto flex flex-wrap p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-primary to-secondary my-12">
        <div class="w-full lg:w-4/5 mx-auto text-center">
          <p class="text-5xl text-white font-extralight">
            Stay <span class="font-semibold">connected</span> and updated:
          </p>
          <br>
          <p class="text-2xl text-white font-extralight">
            The community is active on several different social media platforms, with Discord being the recommended and
            active place to stay updated and interact with the community.
          </p>
        </div>

        <div class="w-full mx-auto text-center">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/4 flex flex-wrap mt-8 lg:mt-16 mb-8">
              <img class="h-12 lg:h-24 mx-auto mb-8" src="/images/SVG/discord.svg" alt="Discord">
              <div class="w-full">
                <a href="https://discord.gg/tKtr9GgzA6" target="_blank">
                  <img class="my-auto w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                  <span class="uppercase ml-4 text-2xl font-semibold text-white">
                    Discord
                  </span>
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/4 flex flex-wrap mt-8 lg:mt-16 mb-8">
              <img class="h-12 lg:h-24 mx-auto mb-8" src="/images/SVG/twitter.svg" alt="Discord">
              <div class="w-full">
                <a href="https://twitter.com/freyalacrypto" target="_blank">
                  <img class="my-auto w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                  <span class="uppercase ml-4 text-2xl font-semibold text-white">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/4 flex flex-wrap mt-8 lg:mt-16 mb-8">
              <img class="h-12 lg:h-24 mx-auto mb-8" src="/images/SVG/telegram.svg" alt="Discord">
              <div class="w-full">
                <a href="https://t.me/freyalacrypto" target="_blank">
                  <img class="my-auto w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                  <span class="uppercase ml-4 text-2xl font-semibold text-white">
                    Telegram
                  </span>
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/4 flex flex-wrap mt-8 lg:mt-16 mb-8">
              <img class="h-12 lg:h-24 mx-auto mb-8" src="/images/SVG/reddit.svg" alt="Discord">
              <div class="w-full">
                <a href="https://www.reddit.com/r/XYA_Official/" target="_blank">
                  <img class="my-auto w-20 inline" src="/images/SVG/arrow-right-white.svg" alt="Arrow right">
                  <span class="uppercase ml-4 text-2xl font-semibold text-white">
                    Reddit
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="section-i-4" class="py-24">
      <div class="container mx-auto">
        <p class="text-3xl lg:text-7xl text-primary-alt font-semibold text-center">
          CryptIDs
        </p>

        <p class="text-2xl lg:text-5xl font-extralight mt-4 lg:mt-8 text-center">
          Stake. Unlock. Upgrade. Challenge.
        </p>

        <p class="text-xl lg:text-3xl w-full lg:w-4/5 mx-auto font-extralight mt-8 text-center">
          CryptIDs, also known as ‘Harmons’, are monster collectible NFTs created with distinctive properties, giving
          each one a unique combination of stats and abilities (hence different strengths and weaknesses). Some Harmons
          are simply stronger and more valuable.
        </p>

        <div class="flex flex-wrap my-12 lg:my-24 relative">
          <div class="w-full lg:w-1/2 opacity-20 lg:opacity-100 absolute top-0 left-0 lg:relative">
            <img src="/images/PNG/harmon-board-bg.png" alt="Harmons on board" style="max-width: 640px;">
          </div>
          <div class="z-10 w-full lg:w-1/2 text-center lg:text-left">
            <p class="text-3xl lg:text-5xl text-primary-alt font-semibold">
              Stake <span class="font-extralight"> & </span> Unlock
            </p>

            <br>

            <p class="text-2xl lg:text-3xl font-extralight">
              Users can slowly unlock more Harmons tokens by staking XYA, playing minigames and more upcoming ways.
              These tokens can be used to open booster packs containing a small number of monsters tentatively named
              Harmons.
            </p>

            <br>
            <br>

            <p class="text-3xl lg:text-5xl text-primary-alt font-semibold">
              Upgrade <span class="font-extralight"> your Harmons </span>
            </p>

            <br>

            <p class="text-2xl lg:text-3xl font-extralight">
              All Harmons will have their own unique forms and the following rarities: Common, Rare and
              Epic. Players will be able to upgrade their Harmons to the next rarity level by merging the same
              base creature multiple times. Some Harmons will have an extra rarity: Legendary.
              <br>
              <br>
              Legendary variants are limited to a certain group of Harmons and are relatively difficult to
              collect, with them being substantially more difficult to obtain or craft.
            </p>

            <br>
            <br>

            <p class="text-3xl lg:text-5xl text-primary-alt font-semibold">
              Challenge <span class="font-extralight"> others and battle your Harmons </span>
            </p>

            <br>

            <p class="text-2xl lg:text-3xl font-extralight">
              Once you build up a valiant army of Harmons, you can battle others. Matchmaking is done based on the
              rarity of your NFTS. This means that someone with all legendary Harmons will never go against someone with
              purely common Harmons.
            </p>

            <br>
            <br>

            <div class="border-l-8 border-primary-alt pl-10">
              <p class="text-2xl text-primary-alt">
                A detailed game document for CryptIDs will be released soon. More precise information will be provided
                about mechanics, Harmons, gameplay and other features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <looking-for-these-component/>

  </main>
</template>

<script>
import LookingForTheseComponent from '@/components/LookingForThese'

export default {
  name: 'Info',
  components: {
    LookingForTheseComponent
  }
}
</script>