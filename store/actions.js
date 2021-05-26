export default {
  changeColumnFocus({commit}, name) {
    document.querySelector('#' + name.toLowerCase()).click()
    commit('changeColumnsSize', name)
  }
}
