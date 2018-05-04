<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <div v-if="isUserLoaded">
        <app-qwest-create-dialog></app-qwest-create-dialog>
        <app-qwest-edit-dialog></app-qwest-edit-dialog>
        <app-qwest-list></app-qwest-list>
      </div>
      <div v-else>
        <app-landing></app-landing>
      </div>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Landing from '@/components/Landing'
import QwestCreateDialog from '@/components/QwestCreateDialog'
import QwestEditDialog from '@/components/QwestEditDialog'
import QwestList from '@/components/QwestList'

export default {
  components: {
    'app-landing': Landing,
    'app-qwest-create-dialog': QwestCreateDialog,
    'app-qwest-edit-dialog': QwestEditDialog,
    'app-qwest-list': QwestList
  },
  computed: {
    isUserLoaded () {
      return this.$store.getters['isUserLoaded']
    }
  }
}
</script>