<template>
  <div style="padding-top:40px;">
    <vs-card>
      <template #text>
          <vs-input loading v-model="value" placeholder="Name" />
      </template>
    </vs-card>
  </div>
</template>
<style lang="scss">

.vs-card,.vs-input {
    width: 100%;
    max-width: 100%;
}
</style>