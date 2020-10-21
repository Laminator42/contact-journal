<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>


    <q-footer  class="bg-grey-8 text-white">
      <div class="q-mb-md absolute-bottom text-center">
        <q-btn
          round
          color="secondary"
          size="15px"
          icon="add"
          @click="showAddContact = true"
        />
      </div>
    </q-footer>

    <q-dialog v-model="showAddContact" persistent>
      <contact-adder></contact-adder>
    </q-dialog>
    
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    'contact-adder': require('components/ContactAdder.vue').default
  },
  data() {
    return {
      showAddContact: false
    }
  }
}
</script>
