<template>
  <q-item clickable v-ripple class="row text-white bg-primary">
    <div class="col-8">
      <q-item-label>
        <q-icon name="watch_later" class="contact-icon"></q-icon>
        {{ contact.date }}
      </q-item-label>
      <q-item-label>
        <q-icon name="location_on" class="contact-icon"></q-icon>
        {{ contact.location }}
      </q-item-label>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="col-6">
          <q-icon name="groups" class="contact-icon"></q-icon>
          {{ contact.nPersons }}
        </div>
        <div class="col-6">
          <q-icon
            name="masks"
            :class="[
              'float-right',
              'contact-icon',
              contact.mask ? '' : 'text-primary',
            ]"
          ></q-icon>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <q-icon
            name="6_ft_apart"
            :class="[
              'contact-icon',
              contact.distance ? '' : 'text-primary',
            ]"
          ></q-icon>
        </div>
        <div class="col-6">
          <q-icon
            :name="contact.outdoor ? 'nature_people' : 'home'"
            class="float-right contact-icon"
          ></q-icon>
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
// TODO: Show verylongtext... with dots if text is too long

import { mapActions } from "vuex";

export default {
  props: ["contact", "id"],
  methods: {
    ...mapActions("contacts", ["deleteContact"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          message: "Möchten Sie wirklich diesen Kontakt löschen?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteContact(id);
        });
    },
    translateBool(value) {
      return value ? "Ja" : "Nein";
    },
  },
};
</script>

<style>
.contact-icon {
  font-size: 1.7em;
}
</style>