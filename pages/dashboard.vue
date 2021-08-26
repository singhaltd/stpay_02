
<template>
  <div class="center">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> ຄຳອະທິບາຍ </vs-th>
          <vs-th> ຈຳນວນ </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in users">
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>

          <template #expand>
            <div class="con-content">
              aksf
            </div>
          </template>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>
<script>
export default {
  layout: "stpay",
  data: () => ({
    editActive: false,
    edit: null,
    editProp: "",
    search: "",
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        email: "",
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "",
      },
    ],
  }),
};
</script>

        