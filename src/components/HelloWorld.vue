<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <app-qwest></app-qwest>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Qwest from '@/components/Qwest'

export default {
  components: {
    'app-qwest': Qwest
  }
}
</script>