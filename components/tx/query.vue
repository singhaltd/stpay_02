
<template>
  <div class="center">
    <vs-button-group>
      <vs-button success>
        <i class="bx bx-file" style="margin-right: 8px"></i>
        {{ $t("_export") }}
      </vs-button>
      <vs-button @click="active = !active">
        <i class="bx bx-info-circle" style="margin-right: 8px"></i>
        {{ $t("_creatquery") }}
      </vs-button>
    </vs-button-group>
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin">ສ້າງ Query</h4>
      </template>
      <div class="con-form">
        <vs-row>
          <vs-col w="6">
            <vs-input type="text" v-model="value" label="RRN" />
          </vs-col>
          <vs-col w="6">
            <vs-select placeholder="Select" label="ປະເພດສິນຄ້າ" v-model="value">
              <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
              <vs-option label="Vue" value="2"> Vue </vs-option>
              <vs-option label="Javascript" value="3"> Javascript </vs-option>
              <vs-option disabled label="Sass" value="4"> Sass </vs-option>
              <vs-option label="Typescript" value="5"> Typescript </vs-option>
              <vs-option label="Webpack" value="6"> Webpack </vs-option>
              <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
            </vs-select>
          </vs-col>
          <vs-col w="6">
            <vs-input type="text" v-model="value" label="ເລີ່ມວັນທີ" />
          </vs-col>
          <vs-col w="6">
            <vs-input type="text" v-model="value" label="ຫາວັນທີ" />
          </vs-col>
          <vs-col w="6">
            <vs-input type="text" v-model="value" label="ຊື່ຜູ້ໃຊ້ເຮັດລາຍການ" />
          </vs-col>
          <vs-col w="6">
            <vs-select placeholder="Select" label="ສະຖານະ" v-model="value">
              <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
              <vs-option label="Vue" value="2"> Vue </vs-option>
              <vs-option label="Javascript" value="3"> Javascript </vs-option>
              <vs-option disabled label="Sass" value="4"> Sass </vs-option>
              <vs-option label="Typescript" value="5"> Typescript </vs-option>
              <vs-option label="Webpack" value="6"> Webpack </vs-option>
              <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
            </vs-select></vs-col
          >
          <vs-col w="6">
            <vs-select placeholder="ສະກຸນເງິນ" v-model="value">
              <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
              <vs-option label="Vue" value="2"> Vue </vs-option>
              <vs-option label="Javascript" value="3"> Javascript </vs-option>
              <vs-option disabled label="Sass" value="4"> Sass </vs-option>
              <vs-option label="Typescript" value="5"> Typescript </vs-option>
              <vs-option label="Webpack" value="6"> Webpack </vs-option>
              <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
            </vs-select>
          </vs-col>
        </vs-row>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button> Sign In </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: "",
    active: false,
    input1: "",
    input2: "",
    checkbox1: false,
  }),
};
</script>
<style lang="scss">
.input__control {
  display: flex;
  flex-direction: column;
  height: auto;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
  padding-top: 30px;
  .vs-input-parent {
    width: 100%;
  }
  .vs-select-content {
    max-width: 100%;
  }
}
</style>
        