<template>
  <div v-if="isFABLoaded">
    <!-- <v-fab-transition>
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
    </v-fab-transition> -->
    <v-speed-dial
      fixed
      bottom
      right
      v-model="speedDial"
    >
      <v-btn
        fab
        dark
        color="blue"
        slot="activator"
        v-model="speedDial"
      >
        <v-icon>keyboard_arrow_up</v-icon>
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
</div>
</template>

<script>
export default {
  data () {
    return {
      speedDial: false
    }
  },
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