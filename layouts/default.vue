<template>
  <v-app id="baseTemplate">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.name"
        >
          <a v-on:click="changeColumnSize(link.name)" :href="'#' + link.name.toLowerCase()">
            {{ link.name }}
          </a>
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
    <Nuxt/>
  </v-app>
</template>

<script>
export default {
  name: "baseTemplate",
  data() {
    return {
      links: []
    }
  },
  methods: {
    changeColumnSize(name) {
      this.$store.commit('changeColumnSize', name)
    }
  },
  created() {
    this.links = this.$store.getters.getLinks
  }
}
</script>

<style lang="scss" scoped>
.v-tab {
  padding: 0;
  margin: 0 16px;
  a {
    color: unset;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
