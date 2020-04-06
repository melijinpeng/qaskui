const mutations = {
	setData(state, data) { state.data = data },

	insertColumn(state, column) { state.columns.push(column) }, // 插入列配置

	updateRowHeight(state, rowHeight) { state.rowHeight = rowHeight }
}
export {mutations}
