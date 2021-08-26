
<template>
  <div class="center content-inputs">
    <from @submit.prevent="SendRegister">
      <vs-card>
        <template #text>
          <vs-input v-model="frm.username" placeholder="username">
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input v-model="frm.email" placeholder="email">
            <template #icon>
              <i class="bx bx-user"></i>
            </template>
          </vs-input>
          <vs-input
            type="password"
            v-model="frm.password"
            label-placeholder="Password"
            :progress="getProgress"
            :visiblePassword="hasVisiblePassword"
            icon-after
            @click-icon="hasVisiblePassword = !hasVisiblePassword"
          >
            <template #icon>
              <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
              <i v-else class="bx bx-hide"></i>
            </template>

            <template v-if="getProgress >= 100" #message-success>
              Secure password
            </template>
          </vs-input>
          <vs-input
            type="password"
            v-model="frm.cpassword"
            label-placeholder="Password"
            :visiblePassword="hasVisiblePasswordc"
            icon-after
            @click-icon="hasVisiblePasswordc = !hasVisiblePasswordc"
          >
            <template #icon>
              <i v-if="!hasVisiblePasswordc" class="bx bx-show-alt"></i>
              <i v-else class="bx bx-hide"></i>
            </template>
          </vs-input>
          <vs-button @click="SendRegister">Register</vs-button>
        </template>
      </vs-card>
    </from>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    hasVisiblePassword: false,
    hasVisiblePasswordc: false,
    frm: {
      password: "",
      cpassword: "",
      email: "",
    },
  }),
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number

      if (/\d/.test(this.frm.password)) {
        progress += 20;
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.frm.password)) {
        progress += 20;
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.frm.password)) {
        progress += 20;
      }

      // more than 5 digits

      if (this.frm.password.length >= 6) {
        progress += 20;
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.frm.password)) {
        progress += 20;
      }

      return progress;
    },
  },
  methods: {
    ...mapActions("auth", ["register"]),
    SendRegister() {
      this.register(this.frm);
    },
  },
};
</script>
<style lang="scss">
.vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
  .vs-input {
    width: 100%;
  }
}
</style>
        