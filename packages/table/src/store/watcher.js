import Vue from 'vue'

export default Vue.extend({
	data: () => ({
		state: {
			data: [], // table中data过滤后的数据
			columns: [],
			rowHeight: 0,
		},
	}),

	methods: {
		updateColumns() {
			// state.columns =
		},

		// 以下方法是扩展，暂时没有用到
		execQuery(ignore) { // 根据 filters 与 sort 去过滤 data
			if (!(ignore && ignore.filter)) this.execFilter()
			this.execSort()
		},
		execFilter() {
			const {orgData, filters} = state

		},
		execSort() {
			state.data = state.orgData
		},
	}
})
