<template>
  <q-card>
    <!-- header -->
    <q-card-section>
      <div class="text-h6">Risikokontakt hinzufügen</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input filled v-model="date">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date
                v-model="date"
                title="Wann ist der Kontakt aufgetreten?"
                subtitle=" "
                mask="YYYY-MM-DD HH:mm"
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Schließen" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Schließen" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>

    <q-card-section>
      <q-input
        filled
        v-model="location"
        label="Wo hat der Kontakt stattgefunden?"
      >
        <template v-slot:prepend>
          <q-icon name="location_on" />
        </template>
      </q-input>
    </q-card-section>

    <q-card-section>
      <q-input
        filled
        v-model="nPersons"
        label="Wie viele Personen waren anwesend?"
        type="number"
      >
        <template v-slot:prepend>
          <q-icon name="groups" />
        </template>
      </q-input>
    </q-card-section>

    <q-toggle v-model="mask" label="Wurde Maske getragen?" />

    <q-toggle v-model="distance" label="Wurde Abstands gehalten?" />

    <q-toggle
      v-model="outdoor"
      label="War die Situation an der frischen Luft?"
    />

    <q-card-section>
      <q-input filled v-model="notes" autogrow label="Notizen"></q-input>
    </q-card-section>

    <!-- card actions -->
    <q-card-actions align="right" class="text-primary">
      <!-- TODO: make icons -->
      <q-btn flat label="Verwerfen" v-close-popup @click="cancel()" />
      <q-btn flat label="Hinzufügen" v-close-popup @click="submit()" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      date: null,
      location: null,
      nPersons: null,
      mask: null,
      distance: null,
      outdoor: null,
      notes: "",
    };
  },
  computed: {
    ...mapGetters("contacts", ["currentId"]),
  },
  methods: {
    ...mapActions("contacts", [
      "updateContacts",
      "deleteContacts",
      "increaseId",
    ]),
    cancel() {
      this.date = null;
      this.location = null;
      this.nPersons = null;
      this.mask = null;
      this.distance = null;
      this.outdoor = null;
      this.notes = null;
    },
    submit() {
      this.increaseId();
      this.updateContacts({
        id: "ID" + this.currentId,
        info: {
          date: this.date,
          location: this.location,
          nPersons: this.nPersons,
          mask: this.mask,
          distance: this.distance,
          outdoor: this.outdoor,
          notes: this.notes,
        },
      });
    },
  },
};
</script>

<style>
</style>