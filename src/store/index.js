import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/store/modules/data'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    data: data
  },
  strict: debug
})
