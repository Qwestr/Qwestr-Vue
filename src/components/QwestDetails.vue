<template>
  <v-container fluid>
    <v-fade-transition mode="out-in">
      <v-card v-if="!qwestDetailsEditMode" key="details">
        <v-card-title primary-title class="headline">
          <v-btn icon :to="{ name: 'home' }" exact>
            <v-icon color="grey">chevron_left</v-icon>
          </v-btn>
          {{ qwest.name }}
          <v-spacer></v-spacer>
          <v-btn v-if="!qwest.completed" @click="completeQwest()" icon class="mx-0">
            <v-icon color="grey">check_circle</v-icon>
          </v-btn>
          <v-btn v-else @click="restartQwest()" icon class="mx-0">
            <v-icon color="teal">check_circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="grey--text mx-2">
          <div v-if="!qwest.description">
            <i>
              No Description Available
            </i>
          </div>
          <div v-else>
            <vue-markdown :source="qwest.description"></vue-markdown>
          </div>
        </v-card-text>
        <div class="mx-3 py-3">
          <h2>SubQwests</h2>
          <app-sub-qwest-list></app-sub-qwest-list>
        </div>
      </v-card>
      <v-card v-else key="edit">
        <v-card-title>
          <span class="headline">Edit Qwest</span>
        </v-card-title>
        <v-form v-model="valid" class="pa-3">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Name"
                    v-model="editableQwest.name"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Description"
                    v-model="editableQwest.description"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-flex>
              <v-btn :loading="isDataProcessing" :disabled="!valid" @click="submitForm" color="primary">
                Update
              </v-btn>
              <v-btn @click="cancelQwestUpdate" color="error">
                Cancel
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-fade-transition>
    <app-sub-qwest-create-dialog></app-sub-qwest-create-dialog>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import SubQwestCreateDialog from '@/components/SubQwestCreateDialog'
import SubQwestList from '@/components/SubQwestList'
import { userQwestRef } from '@/firebase'
import validations from '@/validations'

export default {
  data () {
    return {
      nameRules: [
        validations.nameRequiredRule
      ],
      isDataProcessing: false,
      valid: false
    }
  },
  components: {
    'app-sub-qwest-list': SubQwestList,
    'app-sub-qwest-create-dialog': SubQwestCreateDialog,
    VueMarkdown
  },
  computed: {
    qwestDetailsEditMode () {
      return this.$store.getters['qwestDetailsEditMode']
    },
    editableQwest () {
      // Create a data copy of the qwest
      const data = {...this.qwest}
      // Remove the .key attribute
      delete data['.key']
      // Return data
      return data
    }
  },
  methods: {
    completeQwest () {
      this.$firebaseRefs.qwest.child('completed').set(true)
    },
    restartQwest () {
      this.$firebaseRefs.qwest.child('completed').set(null)
    },
    cancelQwestUpdate () {
      // Update Firebase references
      this.$bindAsObject('qwest', userQwestRef(this.$route.params.key))
      // Dispatch the toggleQwestDetailsEditMode action
      this.$store.dispatch('toggleQwestDetailsEditMode')
    },
    async submitForm () {
      try {
        // Set isDataProcessing to true
        this.isDataProcessing = true
        // Dispatch updateQwest action
        await this.$store.dispatch('updateQwest', {
          qwest: this.$firebaseRefs.qwest,
          data: this.editableQwest
        })
        // Dispatch the toggleQwestDetailsEditMode action
        this.$store.dispatch('toggleQwestDetailsEditMode')
        // Set isDataProcessing to false
        this.isDataProcessing = false
      } catch (error) {
        // Set isDataProcessing to false
        this.isDataProcessing = false
        // Dispatch storeError action
        this.$store.dispatch('storeError', error)
      }
    }
  },
  created () {
    // Setup Firebase references
    this.$bindAsObject('qwest', userQwestRef(this.$route.params.key))
    // Dispatch the storeFAB action
    this.$store.dispatch('storeFAB', { id: 'QwestDetailsFAB', dial: false })
  },
  beforeDestroy () {
    // Dispatch the clearFAB action
    this.$store.dispatch('clearFAB')
    // Dispatch the resetQwestDetailsEditMode action
    this.$store.dispatch('resetQwestDetailsEditMode')
  }
}
</script>