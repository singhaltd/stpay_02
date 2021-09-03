<template>
  <div class="position-fixed">
    <vs-navbar>
      <template #left>
        <h4>ຊຳລະນ້ຳປະປາ</h4>
      </template>
      <template #right>
        <div class="d-flex">
          <vs-button :active="active == 0" @click="active = !active">
            Home
          </vs-button>
        </div>
      </template>
    </vs-navbar>
    <section style="margin-top: 65px">
      <vs-card>
        <template #title>
          <vs-input
            style="margin-top: 20px"
            label="ເລກບັນຊີຜູ້ໃຊ້ນ້ຳ"
            v-model="clientid"
            placeholder="ກາລຸນາປ້ອນເລກບັນຊີຜູ້ໃຊ້ນ້ຳ"
          />
          <h2 style="margin-top: 30px">ລາຍການລ່າສຸດ</h2>
        </template>
        <template #text>
          <vs-table>
            <template #tbody>
              <vs-tr>
                <vs-td> 00000000 | fullname </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </template>
      </vs-card>
      <!-- <nampapa-payment /> -->
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "stpay",
  data() {
    return {
      active: 0,
      clientid: "",
    };
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch({ store }) {
    await store.dispatch("nampapa/historybillno");
  },
  computed: {
    ...mapState("nampapa", ["hislist"]),
  },
};
</script>

<style>
.position-fixed {
  height: calc(100vh - 50px);
  position: absolute;
  width: 100%;
  background-image: url(/assets/nampapa.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 31%;
}
</style>