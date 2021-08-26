
<template>
  <div class="center imgbackground1">
    <vs-dialog prevent-close v-model="active" width="45%">
      <template #header>
        <img src="/assets/stpay.svg" style="max-width:32px;left:0;" />
      </template>
      <vs-row>
        <vs-col lg="6">
          <img src="/assets/inpayment.svg" />
        </vs-col>
        <vs-col lg="6">
          <h4>ເຂົ້າສູ່ລະບົບ</h4>
          <form class="con-form" @submit.prevent="submitlogin">
            <vs-input v-model="frm.email" placeholder="Email">
              <template #icon>
                <i class="bx bxs-user"></i>
              </template>
            </vs-input>
            <vs-input
              type="password"
              v-model="frm.password"
              placeholder="Password"
            >
              <template #icon>
                <i class="bx bxs-lock"></i>
              </template>
            </vs-input>
            <!-- <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
            <input type="submit" style="display: none" class="mt-5" />
            <vs-button block @click="submitlogin">
              {{ $t("btnLogin") }}
            </vs-button>
          </form>
        </vs-col>
      </vs-row>
      <template #footer>
        <div class="footer-dialog">
          <h4>STbank @ IT Department Developer</h4>
          <strong>Version 1.1.1</strong>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    active: true,
    frm: {
      email: "",
      password: "",
    },
    checkbox1: false,
  }),
  methods: {
    ...mapActions("auth", ["login"]),
    async submitlogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.frm,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    authFacebook() {
      this.$auth.loginWith("facebook");
    },
  },
};
</script>
<style lang="scss">
.vs-dialog__header{
  justify-content: left;
}
.vs-dialog__close {
  display: none;
}
.imgbackground1 {
  background-image: url("/assets/loginbackground.jpg");
  height: 100%;
  width: 100%;
  position: fixed;
}
.vs-dialog-content {
  background: none;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox-label {
    font-size: 0.8rem;
  }
  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
    .vs-input {
      width: 100%;
    }
  }
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    a {
      color: rgba(var(--vs-primary), 1) !important;
      margin-left: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .vs-button {
    margin: 0px;
  }
}
</style>
        