
<template>
  <div class="center imgbackground1">
    <vs-dialog prevent-close v-model="active" width="45%">
      <template #header>
        <img src="/assets/stpay.svg" style="max-width: 32px; left: 0" />
      </template>
      <vs-row>
        <vs-col lg="6">
          <img src="/assets/inpayment.svg" />
        </vs-col>
        <vs-col lg="6">
          <h4>ເຂົ້າສູ່ລະບົບ</h4>
          <ValidationObserver v-slot="{ invalid }" ref="form">
            <form class="con-form" @submit.prevent="submitlogin">
              <ValidationProvider
                name="username"
                rules="required"
                v-slot="{ errors }"
              >
                <vs-input v-model="frm.username" placeholder="username">
                  <template #icon>
                    <i class="bx bxs-user"></i>
                  </template>
                  <template #message-danger v-if="errors[0]">
                    {{ errors[0] }}
                  </template>
                </vs-input>
              </ValidationProvider>
              <ValidationProvider
                name="password"
                rules="required"
                v-slot="{ errors }"
              >
                <vs-input
                  type="password"
                  v-model="frm.password"
                  placeholder="Password"
                >
                  <template #icon>
                    <i class="bx bxs-lock"></i>
                  </template>
                  <template #message-danger v-if="errors[0]">
                    {{ errors[0] }}
                  </template>
                </vs-input>
              </ValidationProvider>
              <!-- <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div> -->
              <vs-alert color="danger" v-if="message"> {{ message }} </vs-alert>
              <input type="submit" style="display: none" class="mt-5" />
              <vs-button
                :loading="loading"
                :disabled="invalid"
                block
                @click="submitlogin"
              >
                {{ $t("btnLogin") }}
              </vs-button>
            </form>
          </ValidationObserver>
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
    loading: false,
    message: null,
    frm: {
      username: "",
      password: "",
    },
    checkbox1: false,
  }),

  methods: {
    ...mapActions("auth", ["login"]),
    async submitlogin() {
      this.$refs.form.validate().then(async (success) => {
        this.loading = true;
        if (success) {
          try {
            let response = await this.$auth.loginWith("local", {
              data: this.frm,
            });
            if (response.status == 200) {
              // this.$toast.success("Logged In!");
              this.$axios.setHeader("Authorization", response.token);
              this.loading = false;
              this.$router.push("/");
            } else {
              this.message = response;
            }
          } catch (err) {
            this.loading = false;
            if (err.response.status === 401) {
              this.message = "ຊື່ຜູ້ໃຊ້ ແລະ ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ";
            }
          }
        }
        if (!success) {
          this.loading = false;
        }
      });
    },
    authFacebook() {
      this.$auth.loginWith("facebook");
    },
  },
};
</script>
<style lang="scss">
.vs-dialog__header {
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
        