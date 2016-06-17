import Vue from 'vue'
import Vuex from 'vuex'
import '../utils/ajax'

Vue.use(Vuex)

const state = {
  content: ''
}

const actions = {
  new_post: ({dispath,state}) => {
    $.post('admin/post',{content : state.content}).then((resolve) => {
      console.log(resolve)
    })
  },
  edit_post: (store) => {
    if(store.state.content.length === 0){
      store.dispatch('EDIT_POST','it is edit post')
    }
  },
  update_content: (store, e) => {
    store.dispatch('UPDATE_CONTENT',e.target.value)
  }
}

const mutations = {
  EDIT_POST(state,edit){
    state.content = edit
  },
  UPDATE_CONTENT(state ,value){
    state.content = value
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
