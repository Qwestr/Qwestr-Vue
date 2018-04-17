<template>
  <v-dialog :value="isQwestLoaded" persistent max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Qwest</span>
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
        <v-btn color="secondary" flat @click="closeDialog">Close</v-btn>
        <v-btn color="primary" flat @click="updateQwest">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { db } from '@/firebase'

export default {
  firebase: {
    qwests: {
      source: db.ref('qwests'),
      cancelCallback (error) {
        console.error('error', error)
      }
    }
  },
  computed: {
    isQwestLoaded () {
      return this.$store.getters['qwest']['.key']
    },
    qwest () {
      // Create a data copy of the qwest
      const data = {...this.$store.getters['qwest']}
      // Remove the .key attribute
      delete data['.key']
      // Return data
      return data
    }
  },
  methods: {
    closeDialog () {
      // Dispatch the clearQwest action
      this.$store.dispatch('clearQwest')
    },
    updateQwest () {
      try {
        // Set the qwest data
        this.$firebaseRefs.qwests.child(this.$store.getters['qwest']['.key']).set(this.qwest)
        // Dispatch the clearQwest action
        this.$store.dispatch('clearQwest')
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>