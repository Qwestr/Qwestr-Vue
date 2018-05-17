<template>
  <div>
    <v-fab-transition>
      <v-btn
        v-show="fab.id === 'QwestListFAB'"
        fab
        dark
        fixed
        bottom
        right
        color="green"
        @click="toggleQwestCreateDialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-fab-transition>
      <v-speed-dial
        v-show="fab.id === 'QwestDetailsFAB'"
        fixed
        bottom
        right
        v-model="fab.dial"
      >
        <v-btn
          fab
          dark
          color="blue"
          slot="activator"
          v-model="fab.dial"
          @click="toggleFABDial"
        >
          <v-icon>keyboard_arrow_up</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="orange"
          @click="toggleQwestDetailsEditMode"
        >
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="green"
          @click="toggleSubQwestCreateDialog"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab-transition>
    <v-fab-transition>
      <v-speed-dial
        v-show="fab.id === 'SubQwestDetailsFAB'"
        fixed
        bottom
        right
        v-model="fab.dial"
      >
        <v-btn
          fab
          dark
          color="blue"
          slot="activator"
          v-model="fab.dial"
          @click="toggleFABDial"
        >
          <v-icon>keyboard_arrow_up</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="orange"
          @click="toggleSubQwestDetailsEditMode"
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab-transition>
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
    toggleFABDial () {
      // Dispatch the toggleFABDial action
      this.$store.dispatch('toggleFABDial')
    },
    toggleQwestCreateDialog () {
      // Dispatch the toggleQwestCreateDialog action
      this.$store.dispatch('toggleQwestCreateDialog')
    },
    toggleQwestDetailsEditMode () {
      // Dispatch the toggleFABDial action
      this.$store.dispatch('toggleFABDial')
      // Dispatch the toggleQwestDetailsEditMode action
      this.$store.dispatch('toggleQwestDetailsEditMode')
    },
    toggleSubQwestCreateDialog () {
      // Dispatch the toggleSubQwestCreateDialog action
      this.$store.dispatch('toggleSubQwestCreateDialog')
    },
    toggleSubQwestDetailsEditMode () {
      // Dispatch the toggleFABDial action
      this.$store.dispatch('toggleFABDial')
      // Dispatch the toggleSubQwestDetailsEditMode action
      this.$store.dispatch('toggleSubQwestDetailsEditMode')
    }
  }
}
</script>