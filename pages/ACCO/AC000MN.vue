
<template>
  <div class="center">
    <div class="card">
      <vs-navbar>
        <template #left>
          <h4>ຈັດການບັນຊີ</h4>
        </template>
        <template #right>
          <div class="d-flex">
            <vs-input
              v-model="search"
              :placeholder="$t('_search')"
              style="margin-right: 10px"
            />
            <vs-button-group v-if="tbselected" style="margin-right: 10px">
              <vs-button
                ><i class="bx bx-book-open" style="margin-right: 8px"></i>
                {{ $t("_btn.view") }}
              </vs-button>
              <vs-button danger
                ><i class="bx bx-trash" style="margin-right: 8px"></i>
                {{ $t("_btn.delete") }}
              </vs-button>
            </vs-button-group>
            <!-- <vs-button :active="active == 0" @click="active = !active">
              Home
            </vs-button> -->

            <ac-addac />
          </div>
        </template>
      </vs-navbar>
      <div class="vs-card__text">
        <vs-table v-model="tbselected">
          <template #thead>
            <vs-tr>
              <vs-th> ລະຫັດລູກຄ້າ </vs-th>
              <vs-th> ເລກບັນຊີ </vs-th>
              <vs-th> ຊື່ບັນຊີ </vs-th>
              <vs-th> ສະກຸນເງິນ </vs-th>
              <vs-th> ຊັ້ນບັນຊີ </vs-th>
              <vs-th> ປະເພດ </vs-th>
              <vs-th> ສະຖານະ </vs-th>
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
                {{ tr.custno }}
              </vs-td>
              <vs-td>
                {{ tr.custacno }}
              </vs-td>
              <vs-td>
                {{ tr.acc_desc }}
              </vs-td>
              <vs-td>
                {{ tr.ccy }}
              </vs-td>
              <vs-td>
                {{ tr.accountclass }}
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
              :length="$vs.getLength(users, list.meta.total)"
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
  transition: {
    name: "AC000MN",
    mode: "out-in",
  },
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
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch({ store }) {
    await store.dispatch("account/retries");
  },
  computed: {
    ...mapState("account", ["list"]),
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

        