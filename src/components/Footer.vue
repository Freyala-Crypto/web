<template>
  <footer>
    <div class="container mx-auto flex flex-wrap pb-8 pt-48">
      <div class="w-1/2 lg:w-1/4 mx-auto flex">
        <img src="/images/PNG/GFXAvatar.png" alt="GameFi Crossing logo" class="mt-auto m-auto w-1/2">
      </div>
      <div class="w-full lg:w-1/2 flex flex-wrap my-auto ml-auto mt-8 lg:mt-0 text-center lg:text-left">
        <div class="w-full lg:w-1/3 text-xl lg:text-2xl">
        </div>
        <div class="w-full lg:w-1/3 text-xl lg:text-2xl">
          <p class="font-semibold text-primary-alt mb-6">Get XYA</p>

          <ul>
            <li class="mb-6">
              <a href="https://viperswap.one/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
                 target="_blank">
                Viperswap
              </a>
            </li>
            <li class="mb-6">
              <a href="https://game.defikingdoms.com/#/" target="_blank">
                Defi Kingdoms
              </a>
            </li>
            <li class="mb-6">
              <a href="https://lootswap.finance/#/swap?outputCurrency=0x9b68bf4bf89c115c721105eaf6bd5164afcc51e4"
                 target="_blank">
                Lootswap
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/3 text-xl lg:text-2xl">
          <p class="font-semibold text-primary-alt mb-6">Stay Connected</p>

          <ul>
            <li class="mb-6">
              <a href="https://twitter.com/gameficrossing" target="_blank">
                Twitter
              </a>
            </li>
            <li class="mb-6">
              <a href="https://discord.gg/tKtr9GgzA6" target="_blank">
                Discord
              </a>
            </li>
            <li class="mb-6">
              <a href="https://t.me/gameficrossing" target="_blank">
                Telegram
              </a>
            </li>
            <li class="mb-6">
              <a href="https://www.reddit.com/r/XYA_Official/" target="_blank">
                Reddit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-primary to-secondary py-6 text-white text-base lg:text-xl text-semibold">
      <div class="container mx-auto flex">
        <div class="w-full lg:w-1/3 my-auto text-center lg:text-left">
          <p>
            ©2021 GameFi Crossing. All rights reserved.
          </p>
        </div>
        <div class="hidden lg:block w-2/3 my-auto text-right">
          <p v-clipboard:copy="'0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4'" class="cursor-pointer">
            Contract address: <span style="word-break: break-all">0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4</span>
            <img src="/images/SVG/copy.svg" alt="Copy" class="inline pl-2 w-8">
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>