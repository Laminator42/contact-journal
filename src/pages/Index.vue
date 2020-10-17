<template>
  <div>
    <q-page>
      <!-- col-md-4 col-sm-6  -->
      <div
        class="q-pa-sm fit"
        v-for="(contact, contactKey) in contacts" 
        :key="contactKey"
      >
        <contact
          :contact="contact"
          :id="contactKey"
        ></contact>
      </div>
    </q-page>

    <!-- start adding contact dialog -->
    <!-- TODO: make this separate component -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'PageIndex',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('contacts', ['contacts'])
  },
  components: {
    'contact': require('components/Contact.vue').default
  }
}
</script>
