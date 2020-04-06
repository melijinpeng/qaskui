import { mapState } from './store/helper'
import LayoutObserver from './layout-observer'

export default {
	name: 'KwTableHeader',

	mixins: [LayoutObserver],

	props: {
		store: {
			type: Object,
			require: true,
		},
		border: Boolean,
	},
	computed: {
		table() { return this.$parent },
		...mapState(['columns'])
	},

	methods: {
		getHeaderRowStyle(rowIndex = 0) {
			const headerRowStyle = this.table.headerRowStyle
			if (typeof headerRowStyle === 'function') return headerRowStyle(rowIndex)
			return headerRowStyle
		},
		getHeaderRowClass(rowIndex = 0) {	// 可扩展的多级表头
			const classes = []
			const headerRowClassName = this.table.headerRowClassName
			if (typeof headerRowClassName === 'string') classes.push(headerRowClassName)
			else if (typeof headerRowClassName === 'function') classes.push(headerRowClassName(rowIndex))
			return classes
		},
	},

	render(h) {
		return (
			<table class="kw-table__header" cellspacing="0" cellpadding="0" border="0">
				<colgroup>
					{this.columns.map(column => <col name={column.id} key={column.id}/>)}
				</colgroup>
				<thead>
					<tr class={this.getHeaderRowClass()} style={this.getHeaderRowStyle()}>
						{
							this.columns.map(column => <th><div class="cell">{column.label}</div></th>)
						}
					</tr>
				</thead>
			</table>
		)
	}
}
