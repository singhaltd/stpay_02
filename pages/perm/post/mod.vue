<template>
  <div style="padding-left: 50px; margin-top: 65px">
    <vs-row>
      <vs-col lg="8" sm="12">
        <vs-card>
          <template #title>
            <h3>{{ $t("_article_title_create") }}</h3>
          </template>
          <template #text>
            <vs-input border v-model="content.title" placeholder="Name" />
            <br />
            <client-only placeholder="loading...">
              <ckeditor-nuxt v-model="content.body" :config="editorConfig" />
            </client-only>
          </template>
        </vs-card>
      </vs-col>
      <vs-col lg="4" sm="12">
        <vs-card>
          <template #title>
            <h3>{{ $t("_option") }}</h3>
          </template>
          <template #text> asdfasdf </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: "aslayout",
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  data() {
    return {
      editorConfig: {
        removePlugins: ["Title"],
        simpleUpload: {
          //   uploadUrl: "path_to_image_controller",
          headers: {
            Authorization: "optional_token",
          },
        },
      },
      content: {
        title: "",
        body: "",
        slug: "",
        status: "A",
      },
    };
  },
  computed: {
    //   contentbody(v){
    //       return v
    //   }
  },
  created() {
    // if (process.browser) {
    //   console.log(window.innerWidth, window.innerHeight);
    // }
  },
};
</script>

<style lang="scss">
.vs-card {
  max-width: 100%;
}
.vs-input {
  width: 100%;
}
</style>