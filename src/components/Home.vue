<template>
  <v-container fluid>
    <div v-if="isUserLoaded">
      <app-qwest-create-dialog></app-qwest-create-dialog>
      <app-qwest-edit-dialog></app-qwest-edit-dialog>
      <app-qwest-list></app-qwest-list>
    </div>
    <div v-else>
      <app-landing></app-landing>
    </div>
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
  },
  created () {
    console.log('in Home created hook...')
  },
  destroyed () {
    console.log('in Home destroyed hook...')
  }
}
</script>