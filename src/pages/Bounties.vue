<template>
  <main>
    <section id="section-i-1" class="border-b-4 border-primary-alt"
             style="background: url('/images/SVG/homepage-bg-top.svg') no-repeat top right; background-size: 27%;">
      <div class="container mx-auto text-center pt-24 lg:pt-48">
         <h1 class="text-3xl lg:text-7xl text-primary-alt font-semibold pb-10 lg:pb-20">
          Bounties
        </h1>
      </div>
    </section>

    <section id="section-i-2">
      <div class="container mx-auto py-12 lg:py-24 text-center">
        <div class="w-full lg:w-3/4">
          <p class="text-2xl lg:text-5xl font-extralight">
            Can you help <span class="font-semibold text-primary-alt">GameFi Crossing</span> grow?
          </p>
        </div>
      </div>
    </section>

    <section id="section-i-3">
      <div class="container mx-auto pb-24">
        <div class="flex flex-wrap">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-primary-alt bg-white': openTab !== 1, 'text-white bg-primary-alt': openTab === 1}">
                  General
                </a>
              </li>
<!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">-->
<!--                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-primary-alt bg-white': openTab !== 2, 'text-white bg-primary-alt': openTab === 2}">-->
<!--                  Twitter-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">-->
<!--                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-primary-alt bg-white': openTab !== 3, 'text-white bg-primary-alt': openTab === 3}">-->
<!--                  Twitch-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">-->
<!--                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-primary-alt bg-white': openTab !== 4, 'text-white bg-primary-alt': openTab === 4}">-->
<!--                  App-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">-->
<!--                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(5)" v-bind:class="{'text-primary-alt bg-white': openTab !== 5, 'text-white bg-primary-alt': openTab === 5}">-->
<!--                  Design-->
<!--                </a>-->
<!--              </li>-->
            </ul>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                    <p>
                      No current bounties available. Try again later...
                    </p>
                  </div>
<!--                  <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">-->
<!--                    <p>-->
<!--                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."-->
<!--                    </p>-->
<!--                  </div>-->
<!--                  <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">-->
<!--                    <p>-->
<!--                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"-->
<!--                    </p>-->
<!--                  </div>-->
<!--                  <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">-->
<!--                    <p>-->
<!--                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."-->
<!--                      <br>-->
<!--                      <br>-->
<!--                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"-->
<!--                    </p>-->
<!--                  </div>-->
<!--                  <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">-->
<!--                    <p>-->
<!--                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"-->
<!--                    </p>-->
<!--                  </div>-->
                </div>
              </div>
            </div>
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
  name: 'Bounties',
  components: {
    LookingForTheseComponent
  },
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>