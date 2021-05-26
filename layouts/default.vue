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
          :id="link.name"
          v-on:click="changeColumnFocus(link.name)"
        >
          {{ link.name }}
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
    changeColumnFocus(name) {
      this.$store.dispatch('changeColumnFocus', name)
    }
  },
  created() {
    this.links = this.$store.getters.getLinks
  }
}
</script>

<style lang="scss" scoped>


</style>
