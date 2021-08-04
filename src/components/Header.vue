<template>
  <header class="absolute w-full top-0 left-0 z-50">
    <div class="container mx-auto flex flex-wrap pt-8">
      <div class="w-1/2 lg:w-1/5">
        <router-link :to="{ name: 'homepage' }">
          <img src="/images/SVG/logo.svg" alt="Freyala logo" class="w-full">
        </router-link>
      </div>
      <div class="hidden lg:block w-4/5 my-auto text-right">
        <ul>
          <li class="uppercase pl-6">
            <a href="https://world.freyala.com/" target="_blank">
              <button
                  class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
                Enter Freyala
              </button>
            </a>
          </li>
          <li class="tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold"
              :class="`${this.$route.name === 'homepage' ? 'text-white' : 'text-black'}`">
            <router-link :to="{ name: 'stake' }">Stake it!</router-link>
          </li>
          <li class="tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold"
              :class="`${this.$route.name === 'homepage' ? 'text-white' : 'text-black'}`">
            <router-link :to="{ name: 'get-xya' }">Get XYA</router-link>
          </li>
          <li class="tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold"
              :class="`${this.$route.name === 'homepage' ? 'text-white' : 'text-black'}`">
            <router-link :to="{ name: 'roadmap' }">Roadmap</router-link>
          </li>
          <li class="tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold"
              :class="`${this.$route.name === 'homepage' ? 'text-white' : 'text-black'}`">
            <router-link :to="{ name: 'info' }">Info</router-link>
          </li>
        </ul>
      </div>
      <div class="w-1/2 md:w-5/6 text-right menu text-white block lg:hidden style-padding z-50">
        <div class="my-auto hamburger">
          <div
              :class="{ open: showMenu }"
              @click="changeMobilemenu"
              class="hamburger-link"
          >
            <span :class="`${this.$route.name === 'homepage' ? 'bg-white' : 'bg-black'}`"></span>
            <span :class="`${this.$route.name === 'homepage' ? 'bg-white' : 'bg-black'}`"></span>
            <span :class="`${this.$route.name === 'homepage' ? 'bg-white' : 'bg-black'}`"></span>
            <span :class="`${this.$route.name === 'homepage' ? 'bg-white' : 'bg-black'}`"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full z-50 mt-12">
      <div v-show-slide="showMenu" v-cloak>
        <div id="mobile-menu">
          <ul class="py-24 border-b-4 border-primary-alt">
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'homepage' }">Home</router-link>
            </li>
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'info' }">Info</router-link>
            </li>
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'roadmap' }">Roadmap</router-link>
            </li>
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'team' }">Team</router-link>
            </li>
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'get-xya' }">Get XYA</router-link>
            </li>
            <li class="w-full tracking-widest uppercase px-3 xl:px-6 py-4 text-base xl:text-xl font-semibold" @click="changeMobilemenu()">
              <router-link :to="{ name: 'stake' }">Stake it!</router-link>
            </li>
            <li class="w-full uppercase" @click="changeMobilemenu()">
              <a href="https://world.freyala.com/" target="_blank">
                <button
                    class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
                  Enter Freyala
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    changeMobilemenu() {
      this.showMenu = !this.showMenu
    }
  },
}
</script>