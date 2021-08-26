
<template>
  <div class="theme-container">
    <vs-navbar fixed shadow square v-model="active">
      <template #left>
        <img src="/assets/stpay.svg" style="max-width: 24px" />
        <h4
          style="
            margin-left: 10px;
            color: rgb(0 123 255);
            font-family: system-ui;
          "
        >
          STPAYMENT
        </h4>
        <!-- <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button> -->
      </template>
      <template #right>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <main class="page">
      <Nuxt />
    </main>
    <aside class="sidebar">
      <vs-sidebar v-model="active" open>
        <template v-for="(itm, index) in asidebar.mainnavbar">
          <vs-sidebar-group :key="index" v-if="itm.group == true">
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class="bx bx-group"></i>
                </template>
                {{ itm.title }}
              </vs-sidebar-item>
            </template>
            <vs-sidebar-item
              :id="sitm.id"
              v-for="(sitm, i) in itm.child"
              :key="i"
              item:to="/"
            >
              <template #icon>
                <i class="bx bxl-instagram"></i>
              </template>
              {{ sitm.title }}
            </vs-sidebar-item>
          </vs-sidebar-group>
        </template>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img
                src="http://stpay.stbanklaos.la:9888/asimage/00696.jpg"
                alt=""
              />
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="bx bx-bell"></i>

              <template #badge> 28 </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </aside>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
    activeSidebar: true,
  }),
  computed: {
    asidebar() {
      return require("../lang/la/navbar.json");
    },
  },
};
</script>
<style lang="scss">
*,
body,
html,
button {
  font-family: "Noto San Lao";
}
.page {
  padding-left: 0 !important;
  background-color: #f4f7f8 !important;
  display: block;
  margin-top: 45px;
  position: relative;
  margin-bottom: 0;
  margin-left: calc(260px + 10px);
  transition: all 0.25s ease;
  width: calc(100% - 260px - 20px);
}
.sidebar {
  font-size: 16px;
  background: var(--vs-theme-layout);
  width: 260px;
  position: fixed;
  z-index: 1;
  margin: 0;
  top: 57px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 0;
  overflow-y: auto;
  padding-right: 5px;
  transition: all 0.25s ease;
  overflow: inherit !important;
}
.vs-sidebar-content {
  padding-top: 56px;
}
</style>

        