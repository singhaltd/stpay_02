<template>
  <div class="position-fixed">
    <section>
      <nampapa-inqury />
      <nampapa-bilhist />
      <nampapa-payment />
    </section>
  </div>
</template>

<script>
export default {
  layout: "stpay",
  data() {
    return {};
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