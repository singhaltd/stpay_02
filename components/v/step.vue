<template>
  <div class="pat-100" v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    selected: { default: false },
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },

  mounted() {
    this.isActive = this.selected;
  },
};
</script>

<style>
.pat-100 {
  padding-top: 90px;
}
</style>