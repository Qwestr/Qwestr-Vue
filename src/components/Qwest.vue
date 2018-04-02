<template>
  <v-container>
    <app-qwest-dialog></app-qwest-dialog>
  </v-container>
</template>

<script>
import QwestDialog from '@/components/QwestDialog'

export default {
  components: {
    'app-qwest-dialog': QwestDialog
  }
}
</script>