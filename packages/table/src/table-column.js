let columnIdSeed = 1

export default {
	name: 'KwTableColumn',

	props: {
		label: String,  // th渲染字段
		width: [Number, String],  // 固定宽度
		prop: String, // 数据渲染字段

		// 以下字段暂时未用到
		type: { // index(行前面添加1,2,3等行号)
			type: String,
			default: 'default'
		},
		minWidth: {}, // 最小宽度
		fixed: Boolean, // fixed定位该列
	},

	data() {
		return {

		}
	},
	computed: {
		owner() {
			let parent = this.$parent
			while (parent && !parent.tableId) parent = parent.$parent
			return parent
		},

		columnOrTableParent() {
			let parent = this.$parent
			while (parent && !parent.tableId && !parent.columnId) parent = parent.$parent
			return parent
		},
	},

	created() {
		this.createColumnConfig()
	},
	mounted() {
		this.insertColumn()
	},

	methods: {
		setColumnWidth(column = {}) {
			let minWidth = Number(this.minWidth)
			column.minWidth = minWidth > 80 ? minWidth : 80
			column.width = Number(this.width) || column.minWidth
			return column
		},
		createColumnConfig() {
			const parent = this.columnOrTableParent
			this.isSubColumn = this.owner !== parent
			this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++

			const defaultProps = {  // 扩展属性，暂时只要ID
				id: this.columnId,
			}
			const basicProps = ['label', 'prop']

			let column = {
				...this.getPropsData(basicProps),
				...defaultProps,
				...this.setColumnWidth(),
				children: this.$slots
			}
			this.columnConfig = column
		},

		insertColumn() {
			this.setColumnRenders()
			this.owner.store.commit('insertColumn', this.columnConfig)
		},

		getPropsData(...props) {
			return props.reduce((prev, curr) => {
				if (Array.isArray(curr)) curr.forEach(key => prev[key] = this[key])
				return prev
			}, {})
		},

		setColumnRenders() {
			this.columnConfig.renderCell = ({store, row, $index}) => {
				let children = null
				let column = this.columnConfig

				if (this.$scopedSlots.default) children = this.$scopedSlots.default({$index, row: {...row}})
				else children = row[column.prop]
				return (
					<div style={`height: ${store.state.rowHeight}px;`}>{children}</div>
				)
			}
		},
	},

	render(h) { return h('div', this.$slots.default) },
}
