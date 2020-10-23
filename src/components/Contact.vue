<template>
  <q-card
    clickable
    v-ripple
    class="q-pa-md q-ma-sm row text-white bg-primary"
    @click="showDetail = true"
  >
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
              getColorClass(contact.mask),
            ]"
          ></q-icon>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <q-icon
            name="6_ft_apart"
            :class="['contact-icon', getColorClass(contact.distance)]"
          ></q-icon>
        </div>
        <div class="col-6">
          <q-icon
            :name="contact.outdoor ? 'nature_people' : 'home'"
            :class="[
              'float-right',
              'contact-icon',
              getColorClass(contact.outdoor, noRed=true),
            ]"
          ></q-icon>
        </div>
      </div>
    </div>

    <q-dialog v-model="showDetail">
      <q-card class="q-pa-md q-ma-sm text-white bg-primary" style="width: 100%">
        <q-card-section>
          <q-icon name="watch_later" class="contact-icon"></q-icon>
          {{ contact.date }}
        </q-card-section>

        <q-card-section>
          <q-icon name="location_on" class="contact-icon"></q-icon>
          {{ contact.location }}
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-6">
              <q-icon name="groups" class="contact-icon"></q-icon>
              {{ contact.nPersons }}
            </div>
            <div class="col-6">
              <q-icon name="masks" class="contact-icon"></q-icon>
              {{ contact.mask ? "Ja" : "Nein" }}
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-6">
              <q-icon name="6_ft_apart" class="contact-icon"></q-icon>
              {{ contact.distance ? "Ja" : "Nein" }}
            </div>
            <div class="col-6">
              <q-icon
                :name="contact.outdoor ? 'nature_people' : 'home'"
                class="contact-icon"
              ></q-icon>
              {{ contact.outdoor ? "Outdoor" : "Indoor" }}
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          {{ contact.notes }}
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat @click="promptToDelete(id)">Löschen</q-btn>
          <q-btn flat v-close-popup>Ok</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
// TODO: Show verylongtext... with dots if text is too long

import { mapActions } from "vuex";

export default {
  props: ["contact", "id"],
  data() {
    return {
      showDetail: false,
    };
  },
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
    getColorClass(value, noRed=false) {
      if (value == null) {
        return "text-primary";
      } else if (value === false & !noRed) {
        return "text-red";
      }
    },
  },
};
</script>

<style>
.contact-icon {
  font-size: 1.7em;
}
</style>