
<template>
  <div class="center examplex">
    <vs-navbar
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
    >
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img
            src="https://iartcool.com/wp-content/uploads/2019/11/trading-etoro.jpg"
            alt=""
          />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "guide",
    swiperOption: {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    },
  }),
};
</script>
<style>
*,html,body {
  padding: 0;
  margin: 0;
}
</style>

        