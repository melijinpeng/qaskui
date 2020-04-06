export default {
	computed: {
		tableLayout() {
			let layout = this.layout
			if (!layout && this.table) layout = this.table.layout
			if (!layout) throw new Error('Can not find table layout.')
			return layout
		},
	},

	created() {
		this.tableLayout.addObserver(this)
	},
	mounted() {
		this.onColumnsChange()
	},
	updated() {
		// this.onColumnsChange()
	},
	destroyed() {
		this.tableLayout.removeObserver(this)
	},

	methods: {
		onColumnsChange() {
			const cols = this.$el.querySelectorAll('colgroup > col')
			if (!cols.length) return

			const columnsMap = {} // 防止col不存在
			this.table.columns.forEach(column => columnsMap[column.id] = column)
			cols.forEach(col => {
				const column = columnsMap[col.getAttribute('name')]
				if (column) col.setAttribute('width', column.width)
			})
		},
	},
}
