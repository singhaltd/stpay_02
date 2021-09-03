
<template>
  <div class="center">
    <ac-addac :active="active" />
    <vs-card>
      <template #title>
        <vs-navbar>
          <template #left>
            <h4>ຜຸ້ໃຊ້ລະບົບ</h4>
          </template>
          <template #right>
            <div class="d-flex">
              <vs-input loading v-model="search" placeholder="Name" />
              <vs-button upload :active="active == 0" @click="active = !active">
                Home
              </vs-button>
            </div>
          </template>
        </vs-navbar>
      </template>
      <template #text>
        <vs-table v-model="tbselected">
          <template #thead>
            <vs-tr>
              <vs-th> {{ $t("_username") }} </vs-th>
              <vs-th> {{ $t("_staff_id") }} </vs-th>
              <vs-th> {{ $t("_fullname") }} </vs-th>
              <vs-th> {{ $t("_email") }} </vs-th>
              <vs-th> {{ $t("_tel") }} </vs-th>
              <vs-th> {{ $t("_department") }} </vs-th>
              <vs-th> {{ $t("_branch") }} </vs-th>
              <vs-th> {{ $t("_role") }} </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(users, search)"
              :data="tr"
              :is-selected="tbselected == tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
                {{ tr.email }}
              </vs-td>
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
                {{ tr.id }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer v-if="users.length > 0">
            <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
          </template>
        </vs-table>
      </template>
    </vs-card>
  </div>
</template>
<script>
export default {
  layout: "stpay",
  data: () => ({
    search: "",
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
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
  }),
};
</script>
<style lang="scss">
.vs-card__text {
    padding-top:44px;
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

        