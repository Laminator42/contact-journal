<template>
  <q-card class="bg-primary text-white">

    <q-card-section class="col-12">
      <q-icon size="sm" name="watch_later"></q-icon> {{ contact.date }}
    </q-card-section>

    <q-card-section class="col-12">
      <q-icon size="sm" name="location_on"></q-icon> {{ contact.location }}
    </q-card-section>
    <div class="row" style="width: 100%">
      <q-card-section class="col-4">
        <q-icon size="md" name="groups"></q-icon> {{ contact.nPersons }}
      </q-card-section>
      
      <q-card-section class="col-4">
        <q-icon size="md" name="masks"></q-icon> {{ translateBool(contact.mask) }}
      </q-card-section>
      
      <q-card-section class="col-4">
        <q-icon size="md" name="6_ft_apart"></q-icon> {{ translateBool(contact.distance) }}
      </q-card-section>
    </div>

    <q-icon
      class="absolute-right"
      name="cancel"
      style="font-size: 20px"
      @click="promptToDelete(id)"
    />
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['contact', 'id'],
  methods: {
    ...mapActions('contacts', ['deleteContact']),
    promptToDelete(id) {
      this.$q.dialog({
        message: 'Möchten Sie wirklich diesen Kontakt löschen?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteContact(id)
      })
    },
    translateBool(value) {
      return (value ? "Ja" : "Nein")
    }
  }
}
</script>

<style>

</style>