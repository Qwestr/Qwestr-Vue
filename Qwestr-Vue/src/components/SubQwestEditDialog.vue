<template>
  <v-dialog :value="isSubQwestLoaded" persistent max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Edit SubQwest</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="subQwest.name" label="Name" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" flat @click="closeDialog">Close</v-btn>
        <v-btn color="primary" flat @click="updateSubQwest">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { userSubQwestsRef } from '@/firebase'

export default {
  computed: {
    isSubQwestLoaded () {
      return this.$store.getters['isSubQwestLoaded']
    },
    subQwest () {
      // Create a data copy of the subQwest
      const data = {...this.$store.getters['subQwest']}
      // Remove the .key attribute
      delete data['.key']
      // Return data
      return data
    }
  },
  methods: {
    closeDialog () {
      // Dispatch the clearSubQwest action
      this.$store.dispatch('clearSubQwest')
    },
    updateSubQwest () {
      try {
        // Set the qwest data
        this.$firebaseRefs.subQwests.child(this.$store.getters['subQwest']['.key']).set(this.subQwest)
        // Dispatch the clearSubQwest action
        this.$store.dispatch('clearSubQwest')
      } catch (error) {
        console.log('error', error)
      }
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsArray('subQwests', userSubQwestsRef(this.$route.params.key))
  }
}
</script>