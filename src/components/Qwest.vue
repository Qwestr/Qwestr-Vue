<template>
  <v-container>
    <app-qwest-create-dialog></app-qwest-create-dialog>
    <app-qwest-edit-dialog></app-qwest-edit-dialog>
    <app-qwest-list></app-qwest-list>
  </v-container>
</template>

<script>
import QwestCreateDialog from '@/components/QwestCreateDialog'
import QwestEditDialog from '@/components/QwestEditDialog'
import QwestList from '@/components/QwestList'

export default {
  components: {
    'app-qwest-create-dialog': QwestCreateDialog,
    'app-qwest-edit-dialog': QwestEditDialog,
    'app-qwest-list': QwestList
  }
}
</script>