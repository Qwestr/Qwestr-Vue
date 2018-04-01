<template>
  <v-container>
    <v-btn
      fab
      dark
      fixed
      bottom
      right
      color="green"
      @click="buttonClick"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    buttonClick () {
      this.count += 1
      console.log('Button has been pressed: ', this.count)
    }
  }
}
</script>