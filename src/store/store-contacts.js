import Vue from "vue";

const state = {
  // basically 'db' of states
  contacts: {
    ID1: {
      date: "2020-10-01 12:00",
      location: "Marienplatz",
      nPersons: "30",
      mask: true,
      distance: true,
      notes: ""
    },
    ID2: {
      date: "2020-10-01 13:01",
      location: "Herkomerplatz",
      nPersons: 30,
      mask: true,
      distance: true,
      notes: ""
    },
    ID3: {
      date: "2020-10-02 08:50",
      location: "Daheim",
      nPersons: "30",
      mask: false,
      distance: false,
      notes: ""
    }
  }
};

const mutations = {
  // can't be asynchronous
  deleteContact(state, id) {
    Vue.delete(state.contacts, id);
    console.log(id + " deleted!");
  },
  updateContact(state, payload) {
    Object.assign(state.contacts[payload.id], payload.updates);
  },
  addContact(state, payload) {
    state.contacts[payload.id] = payload.info
  }
};

const actions = {
  // can be asynchronous
  deleteContact({ commit }, id) {
    commit("deleteContact", id);
  },
  updateContact({ commit }, payload) {
    commit("updateContact", payload);
  },
  addContact({ commit }, payload) {
    commit("addContact", payload);
  }
};

const getters = {
  contacts: state => {
    return state.contacts;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
