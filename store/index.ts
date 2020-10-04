import { GetterTree, MutationTree } from 'vuex'

interface StateType {
  fieldName: string;
}
const state = () => ({
  fieldName: ''
})

const getters: GetterTree<StateType, StateType> = {
  fieldName: state => state.fieldName
}

const mutations: MutationTree<StateType> = {
  setFieldName(state, name: string) {
    state.fieldName = name
  }
}

export {
  state,
  getters,
  mutations
}
