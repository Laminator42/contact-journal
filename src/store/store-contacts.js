import Vue from "vue";
import { LocalStorage } from "quasar";

const state = {
  // basically 'db' of states
  currentId: 10,
  contacts: {}
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
    console.log(contactState)
    if (contactState) {
      commit("setContacts", contactState.contacts);
      commit("setId", contactState.currentId);
    }
  }
};

const getters = {
  contacts: state => {
    return state.contacts;
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
