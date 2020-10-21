<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions('contacts', ['getContactState'])
  },
  mounted() {
    this.getContactState()
  }
}
</script>
