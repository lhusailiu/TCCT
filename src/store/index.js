import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  user: '',
  password: '',
  userPic: '',
  isBgImgas: true,
  isTitels: false,
  isContents: false,
  isAllFriend: false,
  isFriendKou: false,
  isChuangkou: true
}

const mutations = {
  saveAdmintInfo (state, load) {
    console.log(load)
    state.user = load.user
    state.password = load.password
    state.userPic = load.userPic
  },
  saveBbInfo (state, load) {
    state.isBgImgas = load.isBgImgas
    state.isTitels = load.isTitels
    state.isContents = load.isContents
    state.isAllFriend = load.isAllFriend
    state.isFriendKou = load.isFriendKou
    state.isChuangkou = load.isChuangkou
  }
}

export default new Vuex.Store({
  state,
  mutations
})
