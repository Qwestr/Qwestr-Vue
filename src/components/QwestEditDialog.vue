<template>
  <v-dialog v-model="dialog" persistent max-width="500">
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
  data () {
    return {
      dialog: false
    }
  },
  firebase: {
    qwest: {
      // source: this.qwestRef,
      source: db.ref('qwests'),
      asObject: true,
      cancelCallback (error) {
        console.error('error', error)
      },
      readyCallback () {
        console.log('data ready!')
        console.log('this.qwest', this.qwest)
        console.log("db.ref('qwests')", db.ref('qwests'))
        console.log('qwest loaded', this.$store.getters['qwest'])
        // console.error('error', error)
      }
    }
  },
  computed: {
    qwestRef () {
      console.log('qwest loaded', this.$store.getters['qwest'])
      console.log('this.qwests', this.qwests)
      // console.log('qwest name', this.$store.getters['qwest'])
      return this.$store.getters['qwest']
    }
  },
  methods: {
    closeDialog () {
      // Dispatch the clearQwest action
      this.$store.dispatch('clearQwest')
    },
    updateQwest () {
      // try {
      //   // Create the new Qwest
      //   this.$firebaseRefs.qwests.push(this.qwest)
      //   // Clear the inputs
      //   this.qwest.name = null
      //   // Close the dialog
      //   this.dialog = false
      // } catch (error) {
      //   console.log('error', error)
      // }
    }
  },
  created () {
    console.log('dialog created!')
    this.dialog = true
  }
}
</script>