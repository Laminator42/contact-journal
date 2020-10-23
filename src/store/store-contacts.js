import Vue from "vue";
import { LocalStorage } from "quasar";

const state = {
  // basically 'db' of states
  currentId: 10,
  contacts: {},
  sort: 'date'
};

const mutations = {
  // can't be asynchronous
  deleteContact(state, id) {
    Vue.delete(state.contacts, id);
    console.log(id + " deleted!");
  },
  updateContacts(state, payload) {
    Vue.set(state.contacts, payload.id, payload.info);
  },
  increaseId(state) {
    Vue.set(state, "currentId", state.currentId + 1);
  },
  setContacts(state, contacts) {
    Vue.set(state, "contacts", contacts);
  },
  setId(state, id) {
    Vue.set(state, "currentId", id);
  }
};

const actions = {
  // can be asynchronous
  deleteContact({ commit, dispatch }, id) {
    commit("deleteContact", id);
    dispatch("saveContactState");
  },
  updateContacts({ commit, dispatch }, payload) {
    commit("updateContacts", payload);
    dispatch("saveContactState");
  },
  increaseId({ commit, dispatch }) {
    commit("increaseId");
    dispatch("saveContactState");
  },
  saveContactState({ state }) {
    LocalStorage.set("contactState", state);
  },
  getContactState({ commit }) {
    let contactState = LocalStorage.getItem("contactState");
    if (contactState) {
      commit("setContacts", contactState.contacts);
      commit("setId", contactState.currentId);
    }
  }
};

const getters = {
  contacts: (state, getters) => {
    // TODO: make this toggeable
    return getters.contactsOrdered;
  },
  contactsOrdered: state => {
    let contactsOrdered = {},
      keysOrdered = Object.keys(state.contacts);

    // sort descending
    keysOrdered.sort((a, b) => {
      let aDate = state.contacts[a][state.sort],
        bDate = state.contacts[b][state.sort];
      if ((aDate > bDate) || !aDate || !bDate) return -1;
      else if (aDate < bDate) return 1;
      else return 0;
    });

    keysOrdered.forEach(key => {
      contactsOrdered[key] = state.contacts[key];
      console.log(key)
    });

    return contactsOrdered;
  },
  currentId: state => {
    return state.currentId;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
