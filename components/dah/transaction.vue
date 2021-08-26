
<template>
  <div class="center">
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <h4 class="not-margin">ເພີ່ມບັນຊີ</h4>
      </template>

      <div class="con-form">
        <vs-input v-model="input1" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="input2" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Sign In </vs-button>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    input1: "",
    input2: "",
    checkbox1: false,
  }),
};
</script>
<style>
</style>
        