<template>
  <v-container fluid>
    <v-fade-transition mode="out-in">
      <v-card v-if="!subQwestDetailsEditMode" key="details">
        <v-card-title primary-title class="headline">
          <v-btn icon :to="{ name: 'home' }" exact>
            <v-icon color="grey">chevron_left</v-icon>
          </v-btn>
          {{ subQwest.name }}
          <v-spacer></v-spacer>
          <v-btn v-if="!subQwest.completed" @click="completeSubQwest()" icon class="mx-0">
            <v-icon color="grey">check_circle</v-icon>
          </v-btn>
          <v-btn v-else @click="restartSubQwest()" icon class="mx-0">
            <v-icon color="teal">check_circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="grey--text mx-2">
          <div v-if="!subQwest.description">
            <i>
              No Description Available
            </i>
          </div>
          <div v-else>
            <vue-markdown :source="subQwest.description"></vue-markdown>
          </div>
        </v-card-text>
      </v-card>
      <v-card v-else key="edit">
        <v-card-title>
          <span class="headline">Edit SubQwest</span>
        </v-card-title>
        <v-form v-model="valid" class="pa-3">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Name"
                    v-model="editableSubQwest.name"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Description"
                    v-model="editableSubQwest.description"
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
              <v-btn @click="cancelSubQwestUpdate" color="error">
                Cancel
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-fade-transition>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { userSubQwestRef } from '@/firebase'
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
    VueMarkdown
  },
  computed: {
    subQwestDetailsEditMode () {
      return this.$store.getters['subQwestDetailsEditMode']
    },
    editableSubQwest () {
      // Create a data copy of the subQwest
      const data = {...this.subQwest}
      // Remove the .key attribute
      delete data['.key']
      // Return data
      return data
    }
  },
  methods: {
    completeSubQwest () {
      this.$firebaseRefs.subQwest.child('completed').set(true)
    },
    restartSubQwest () {
      this.$firebaseRefs.subQwest.child('completed').set(null)
    },
    cancelSubQwestUpdate () {
      // Update Firebase references
      this.$bindAsObject('subQwest', userSubQwestRef(this.$route.params.qwestKey, this.$route.params.subQwestKey))
      // Dispatch the toggleSubQwestDetailsEditMode action
      this.$store.dispatch('toggleSubQwestDetailsEditMode')
    },
    async submitForm () {
      try {
        // Set isDataProcessing to true
        this.isDataProcessing = true
        // Dispatch updateSubQwest action
        await this.$store.dispatch('updateSubQwest', {
          subQwest: this.$firebaseRefs.subQwest,
          data: this.editableSubQwest
        })
        // Dispatch the toggleSubQwestDetailsEditMode action
        this.$store.dispatch('toggleSubQwestDetailsEditMode')
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
    this.$bindAsObject('subQwest', userSubQwestRef(this.$route.params.qwestKey, this.$route.params.subQwestKey))
    // Dispatch the storeFAB action
    this.$store.dispatch('storeFAB', { id: 'SubQwestDetailsFAB', dial: false })
  },
  beforeDestroy () {
    // Dispatch the clearFAB action
    this.$store.dispatch('clearFAB')
    // Dispatch the resetSubQwestDetailsEditMode action
    this.$store.dispatch('resetSubQwestDetailsEditMode')
  }
}
</script>