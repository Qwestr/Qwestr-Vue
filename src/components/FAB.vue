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
        @click="invokeFABAction"
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
  },
  methods: {
    invokeFABAction () {
      if (this.$store.getters['fab'].id === 'QwestListFAB') {
        // Dispatch the toggleQwestCreateDialog action
        this.$store.dispatch('toggleQwestCreateDialog')
      }
    }
  }
}
</script>