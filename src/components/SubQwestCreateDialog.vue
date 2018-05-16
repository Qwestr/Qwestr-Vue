<template>
  <v-dialog v-model="subQwestCreateDialog" persistent max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Create SubQwest</span>
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
        <v-btn color="primary" flat @click="createQwest">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { userSubQwestsRef } from '@/firebase'

export default {
  data () {
    return {
      subQwest: {
        name: null
      }
    }
  },
  computed: {
    subQwestCreateDialog () {
      return this.$store.getters['subQwestCreateDialog']
    }
  },
  methods: {
    createQwest () {
      try {
        // Create the new Qwest
        this.$firebaseRefs.subQwests.push(this.subQwest)
        // Clear the inputs
        this.subQwest.name = null
        // Close the dialog
        this.closeDialog()
      } catch (error) {
        console.log('error', error)
      }
    },
    closeDialog () {
      // Dispatch the toggleSubQwestCreateDialog action
      this.$store.dispatch('toggleSubQwestCreateDialog')
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsArray('subQwests', userSubQwestsRef(this.$route.params.key))
  }
}
</script>