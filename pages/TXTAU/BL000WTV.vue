
<template>
  <div class="center">
    <ac-addac :active="active" />
    <div class="card">
      <vs-navbar>
        <template #left>
          <h4>ປະຫັວດລາຍການ</h4>
        </template>
        <template #right>
          <div class="d-flex">
            <tx-query />
          </div>
        </template>
      </vs-navbar>
      <div class="vs-card__text">
        <vs-table v-model="tbselected">
          <template #thead>
            <vs-tr>
              <vs-th> {{ $t("_referno") }} </vs-th>
              <vs-th> {{ $t("_productcode") }} </vs-th>
              <vs-th> {{ $t("_RRN") }} </vs-th>
              <vs-th> {{ $t("_typereq") }} </vs-th>
              <vs-th> {{ $t("_client_id") }} </vs-th>
              <vs-th> {{ $t("_client_name") }} </vs-th>
              <vs-th> {{ $t("_billno") }} </vs-th>
              <vs-th> {{ $t("_amount") }} </vs-th>
              <vs-th> {{ $t("_currentcy") }} </vs-th>
              <vs-th> {{ $t("_txtdate") }} </vs-th>
              <vs-th> {{ $t("_maker") }} </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(list.data, search)"
              :data="tr"
              :is-selected="tbselected == tr"
            >
              <vs-td>
                {{ tr.refno }}
              </vs-td>
              <vs-td>
                {{ tr.msgid }}
              </vs-td>
              <vs-td>
                {{ tr.rrn }}
              </vs-td>
              <vs-td>
                {{ tr.reqtype }}
              </vs-td>
              <vs-td>
                {{ tr.billno }}
              </vs-td>
              <vs-td>
                {{ tr.fullname }}
              </vs-td>
              <vs-td>
                {{ tr.desc1 }}
              </vs-td>

              <vs-td>
                {{ tr.bill_amount | currency }}
              </vs-td>
              <vs-td>
                {{ tr.accy }}
              </vs-td>
              <vs-td>
                {{ $moment(tr.txndate).format("DD/MM/YYYY") }}
              </vs-td>
              <vs-td>
                {{ tr.maker }}
              </vs-td>
              <vs-td>
                {{ tr.casatype }}
              </vs-td>
              <vs-td>
                {{ tr.stat }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer v-if="list.meta.last_page > 1">
            <vs-pagination
              v-model="page"
              :length="$vs.getLength(list.data, list.meta.last_page)"
            />
          </template>
        </vs-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "stpay",
  data: () => ({
    search: "",
    posts: [],
    active: false,
    tbselected: null,
    page: 1,
    max: 3,
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
    ],
  }),
  filters: {
    currency(v) {
      return v.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch({ store }) {
    await store.dispatch("transaction/gettransaction");
  },
  computed: {
    ...mapState("transaction", ["list"]),
  },
};
</script>
<style lang="scss">
.vs-card__text {
  padding-top: 60px;
}
.d-flex {
  display: flex;
}
.float-right {
  float: right;
}
.vs-card {
  max-width: 100%;
}
</style>

        