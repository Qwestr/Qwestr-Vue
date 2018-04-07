<template>
  <v-container>
    <app-qwest-dialog></app-qwest-dialog>
    <app-qwest-list></app-qwest-list>
  </v-container>
</template>

<script>
import QwestDialog from '@/components/QwestDialog'
import QwestList from '@/components/QwestList'

export default {
  components: {
    'app-qwest-dialog': QwestDialog,
    'app-qwest-list': QwestList
  }
}
</script>