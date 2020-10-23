<template>
  <div>
    <q-page>
      <div class="q-pa-md">
        <!-- <q-list bordered separator> -->
          <contact
            v-for="(contact, contactKey) in contacts" 
            :key="contactKey"
            :contact="contact"
            :id="contactKey"
            >
          </contact>
        <!-- </q-list> -->
      </div>
    </q-page>

    <!-- start adding contact dialog -->
    <!-- TODO: make this separate component -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("contacts", ["contacts"]),
  },
  components: {
    contact: require("components/Contact.vue").default,
  },
};
</script>
