export default {
  changeColumnSize(state, name){
    const links = state.links
    links.map(link => {
      link.height = 20
      link.width = 2
    })
    let newFocusColumn = links.find( item => item.name === name )
    newFocusColumn.height = 90
    newFocusColumn.width = 8
  }
}
