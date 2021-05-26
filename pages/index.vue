<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col
          v-for="column in columns"
          :key="column.name"
          cols="12"
          :sm="column.width"
        >
          <v-sheet
            rounded="lg"
            :min-height="column.height + 'vh'"
            v-on:click="changeColumnFocus(column.name)"
          >
            <component :is="column.name"></component>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      components: []
    }
  },
  methods: {
    changeColumnFocus(name) {
      this.$store.dispatch('changeColumnFocus', name)
    }
  },
  computed: {
    columns() {
      return this.$store.getters.getLinks
    }
  }
}
</script>

<style lang="scss">
.col-12{
  transition: .5s;

  .v-sheet {
    transition: .5s;
  }
}

.col-sm-2 {
  .v-sheet{
    cursor: pointer;
  }
}

</style>
