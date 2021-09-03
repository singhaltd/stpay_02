
<template>
  <div class="center">
    <div class="card">
      <vs-navbar>
        <template #left>
          <h4>Work Flow</h4>
        </template>
        <template #right>
          <strong>ວັນທີ 20/02/2020</strong>
        </template>
      </vs-navbar>
      <div class="example" style="padding-top: 60px">
        <h3 style="padding-left: 10px">BILLLER</h3>
        <vs-row class="gutter-1">
          <vs-col w="3">
            <vs-card>
              <template #title><h1>10</h1></template>
              <template #text>Success </template>
            </vs-card>
          </vs-col>
          <vs-col w="3">
            <vs-card>
              <template #title><h1>10</h1></template>
              <template #text>Pending </template>
            </vs-card>
          </vs-col>
          <vs-col w="3">
            <vs-card>
              <template #title><h1>10</h1></template>
              <template #text>Unsuccess </template>
            </vs-card>
          </vs-col>
          <vs-col w="3">
            <vs-card>
              <template #title><h1>10</h1></template>
              <template #text>Reversal </template>
            </vs-card>
          </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
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
<style lang="scss">
.gutter-1 {
  .vs-col {
    padding: 0 10px;
  }
}
</style>

        