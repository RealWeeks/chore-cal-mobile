import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    message: '',
    token: '',
    groups: [],
    id: ''
  },
  mutations: {
    SET_EMAIL (state, data) {
      state.email = data
    },
    SET_PASSWORD (state, data) {
      state.password = data
    },
    SET_ID (state, data) {
      state.id = data
    },
    SET_MESSAGE (state, data) {
      state.message = data
    },
    SET_TOKEN (state, data) {
      state.token = data
    },
    SET_GROUPS (state, data) {
      state.groups = data
    }
  },
  actions: {
    SIGN_UP ({ commit }, data) {
      axios.post(`http://localhost:3000/signup?email=${data.email}&password=${data.password}`)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_EMAIL', response.data.user.email)
            commit('SET_PASSWORD', response.data.user.password)
            commit('SET_ID', response.data.user._id)
            commit('SET_MESSAGE', response.data.message)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    },
    SIGN_IN ({ commit }, data) {
      axios.post(`http://localhost:3000/login?email=${data.email}&password=${data.password}`)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_TOKEN', response.data.token)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    },
    GET_PROFILE ({ commit }, data) {
      axios.get(`http://localhost:3000/user/profile`, {headers: {
        'Authorization': `bearer ${this.state.token}`
      }})
        .then((response) => {
          if (response.status === 200) {
            commit('SET_MESSAGE', response.data.status)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    },
    CREATE_GROUP ({ commit }, data) {
      axios.post(`http://localhost:3000/user/creategroup`, data, {headers: {
        'Authorization': `bearer ${this.state.token}`
      }})
        .then((response) => {
          if (response.status === 200) {
            commit('SET_MESSAGE', response.data.status)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    },
    GET_GROUPS ({ commit }, data) {
      axios.get(`http://localhost:3000/user/groups`, {headers: {
        'Authorization': `bearer ${this.state.token}`
      }})
        .then((response) => {
          if (response.status === 200) {
            commit('SET_GROUPS', response.data.groups)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    }
  }
})

export default store
