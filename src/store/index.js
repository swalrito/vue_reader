import actions from './actions.js'
import mutations from './mutations.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	catalog:false
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})