
<template>
  <div class="center">
    <vs-button-group>
      <vs-button success>
        <i class="bx bx-file" style="margin-right: 8px"></i>
        {{ $t("_export") }}
      </vs-button>
      <vs-button @click="active = !active">
        <i class="bx bx-book-add" style="margin-right: 8px"></i>
        {{ $t("_addnew") }}
      </vs-button>
    </vs-button-group>
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin">ເພີ່ມບັນຊີ</h4>
      </template>
      <ValidationObserver ref="form">
        <form @submit.prevent="getAccount">
          <div class="con-form">
            <ValidationProvider
              name="custacno"
              rules="required"
              v-slot="{ errors }"
            >
              <vs-input
                :loading="loading"
                type="number"
                v-model="frm.custacno"
                placeholder="ກາລຸນາປ້ອນເລກບັນຊີແລ້ວກົດ ENTER"
              >
                <template #message-danger v-if="errors[0]">
                  {{ errors[0] }}
                </template>
              </vs-input>
            </ValidationProvider>
          </div>
        </form>
      </ValidationObserver>
      <template v-if="detail && !detail['ERROR']">
        <vs-row>
          <vs-col lg="4">
            <div class="input__control">
              <vs-input
                type="text"
                icon-after
                v-model="detail.CUSTNO"
                :label-placeholder="$t('_cif')"
              >
              </vs-input>
            </div>
          </vs-col>
          <vs-col lg="8">
            <div class="input__control">
              <vs-input
                type="text"
                v-model="detail.ACC_DESC"
                icon-after
                :label-placeholder="$t('_fullname')"
              >
              </vs-input>
            </div>
          </vs-col>
          <vs-col lg="4">
            <div class="input__control">
              <vs-input
                type="text"
                icon-after
                v-model="detail.ACCOUNTCLASS"
                :label-placeholder="$t('_accountclass')"
              >
              </vs-input>
            </div>
          </vs-col>
          <vs-col lg="4">
            <div class="input__control">
              <vs-input
                type="text"
                icon-after
                v-model="detail['Account-Details'].ACCTYPE"
                :label-placeholder="$t('_accounttype')"
              >
              </vs-input>
            </div>
          </vs-col>
          <vs-col lg="4">
            <div class="input__control">
              <vs-input
                type="text"
                icon-after
                v-model="detail['Account-Details'].CCY"
                :label-placeholder="$t('_currentcy')"
              >
              </vs-input>
            </div>
          </vs-col>
          <vs-col lg="12">
            <div class="input__control">
              <vs-input
                type="text"
                icon-after
                v-model="detail.payment_link"
                :label-placeholder="$t('_method')"
              >
              </vs-input>
            </div>
          </vs-col>
        </vs-row>
      </template>
      <template #footer v-if="detail && !detail['ERROR']">
        <div class="footer-dialog">
          <vs-button @click="createAc" block> {{ $t("_btn.save") }} </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    loading: false,
    message: null,
    active: false,
    frm: {
      custacno: "",
      custno: "",
      ccy: "",
      accountclass: "",
      fullname: "",
      stat: "",
      casatype: "",
      payment_link: "",
    },
  }),
  computed: {
    ...mapState("account", ["detail"]),
  },
  methods: {
    ...mapActions("account", ["getFcAccountDetail", "createAccount"]),
    async getAccount() {
      this.loading = true;
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          await this.getFcAccountDetail(this.frm).then((res) => {
            this.loading = false;
          });
        }
        if (!success) {
          this.loading = false;
        }
      });
    },
    async createAc() {
      const fm = new FormData();
      fm.append("custacno", this.detail.CUSTACNO);
      fm.append("custno", this.detail.CUSTNO);
      fm.append("ccy", this.detail.CCY);
      fm.append("accountclass", this.detail.ACCOUNTCLASS);
      fm.append("fullname", this.detail.ACC_DESC);
      fm.append("stat", "O");
      fm.append("casatype", this.detail["Account-Details"].ACCTYPE);
      fm.append("payment_link", "A");
      await this.createAccount(fm).then((res) => {});
    },
  },
};
</script>
<style>
</style>
        