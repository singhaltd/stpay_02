<template>
  <div>
    <div class="con-ul-tabs">
      <ul class="progressbar">
        <li
          class="active"
          v-for="tab in tabs"
          @click="selectTab(tab)"
          :key="tab"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>

<style lang="scss">
.vtabs {
  display: inline-block;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  width: 25%;
  text-align: center;
  background: #f4f4f4;
  color: #555;
  position: relative;
  transition: 0.25s background ease;
  cursor: pointer;
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    background: #ccc;
    bottom: 0;
    opacity: 0;
    left: 0;
    transition: 0.25s ease;
  }
  &:hover::after {
    opacity: 1;
  }
}
.con-vs-tabs {
  position: relative;
}
.vs-tabs--li {
  display: block;
  position: relative;
}
.vs-tabs-position-top .vs-tabs--ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.vs-tabs--ul {
  width: 100%;
  padding-left: 0;
  -webkit-box-shadow: 0 0 25px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 4%);
}
.con-vs-tabs .con-ul-tabs,
.vs-tabs--ul {
  position: relative;
}
// .tabs-header {
//   display: inline-block;
//   li {
//     list-style: none;
//     float: left;
//     a {
//       padding: 10px;
//       background-color: red;
//     }
//   }
// }
</style>