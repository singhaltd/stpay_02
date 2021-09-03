
<template>
  <div class="hidden">
    <vs-navbar shadow square v-model="active">
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <template #right>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar absolute reduce hover-expand v-model="active" open>
      <template #logo>
        <!-- ...img logo -->
      </template>
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
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    <div>
      <Nuxt />
    </div>
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

        