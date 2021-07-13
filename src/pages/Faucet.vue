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
        <input id="input" placeholder="ONE Address" type="text" class="px-4 w-full py-2 text-2xl text-black border-2 border-primary-alt" />

        <br>
        <br>

        <div class="flex">
          <p id="loading" class="text-xl lg:text-2xl mb-4 text-black">Queuing...</p>
          <p id="output" class="text-xl lg:text-2xl mb-4 text-black"></p>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div id="recaptcha" class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6LfRZQobAAAAAN5hj1f9Y3l5k1u_whZaAOlbWKp8"></div>
          </div>
          <div class="w-full lg:w-1/2 text-right">
            <button id="submit" class="tracking-widest uppercase bg-gradient-to-r from-primary to-secondary py-4 px-8 rounded-md text-white text-xl font-semibold">
              Finish your daily quest!
            </button>
          </div>
        </div>
      </div>
    </section>

    <looking-for-these-component/>

    <script type="application/javascript" src="https://www.google.com/recaptcha/api.js" async defer></script>
  </main>
</template>

<script>
import LookingForTheseComponent from '@/components/LookingForThese'

export default {
  name: 'Faucet',
  components: {
    LookingForTheseComponent
  },

  mounted() {
    const qs = (x) => document.querySelector(x)

    qs('#submit').disabled = 'true'
    qs('#loading').style.display = 'none'
    window.recaptchaCallback = function recaptchaCallback(token) {
      qs('#submit').removeAttribute('disabled')
      qs('#submit').onclick = () => {
        qs('#output').innerHTML = ''
        qs('#loading').style.display = 'block'
        const address = qs('#input').value
        fetch('https://faucet-api.freyala.com/fund', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            address,
            token
          })
        })
            .then((res) => res.json())
            .then((res) => {
              qs('#loading').style.display = 'none'
              if (res.success === true) {
                qs('#output').innerHTML = '<h4>Queued!</h4>' + res.message
              } else {
                qs('#output').innerHTML = '<h4>An error occurred!</h4>' + res.message
              }
            })
      }
    }
  }
}
</script>