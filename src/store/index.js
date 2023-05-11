import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Info from './Info'
import Post from './Post'
import Skills from './Skills'
import Slader from './Slader'

Vue.prototype.axios=axios

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
      Info,
      Post,
      Skills,
      Slader,
  }
  
})
