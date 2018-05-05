<template>
  <div>
    <v-fab-transition>
      <v-btn
        fab
        dark
        fixed
        bottom
        right
        v-show="!hidden"
        color="green"
        @click="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">Create Qwest</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="qwest.name" label="Name" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" flat @click="dialog = false">Close</v-btn>
          <v-btn color="primary" flat @click="createQwest">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { userQwestsRef } from '@/firebase'

export default {
  data () {
    return {
      qwest: {
        name: null
      },
      dialog: false,
      hidden: true
    }
  },
  methods: {
    createQwest () {
      try {
        // Create the new Qwest
        this.$firebaseRefs.qwests.push(this.qwest)
        // Clear the inputs
        this.qwest.name = null
        // Close the dialog
        this.dialog = false
      } catch (error) {
        console.log('error', error)
      }
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsArray('qwests', userQwestsRef())
    // Show button
    this.hidden = false
  },
  beforeDestroy () {
    console.log('destroying component!')
    // Hide button
    this.hidden = true
  }
}
</script>