<template>
  <div v-if="isFABLoaded">
    <v-fab-transition>
      <v-btn
        fab
        dark
        fixed
        bottom
        right
        :key="fab.id"
        :color="fab.color"
      >
        <v-icon>{{ fab.icon }}</v-icon>
      </v-btn>
    </v-fab-transition>
</div>
</template>

<script>
export default {
  computed: {
    isFABLoaded () {
      return this.$store.getters['isFABLoaded']
    },
    fab () {
      return this.$store.getters['fab']
    }
  }
}
</script>