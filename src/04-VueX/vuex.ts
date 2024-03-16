import { createStore } from 'vuex'

const VuexStore = createStore({
  state () {
    return {
      msg: 'Vuex 默认信息'
    }
  },
  mutations: {
    updateMsg (state: any, msg: string) {
      state.msg = msg
    }
  }
});

export default VuexStore;
