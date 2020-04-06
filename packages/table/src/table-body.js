import {mapState} from './store/helper'
import LayoutObserver from './layout-observer'

export default {
	name: 'KwTableBody',

	mixins: [LayoutObserver],

	props: {
		store: {
			type: Object,
			require: true,
		}
	},
	computed: {
		table() { return this.$parent },
		...mapState(['data', 'columns']),
	},

	mounted() {
		// console.log(this.data)
		// console.log(this.table.layout)
	},

	methods: {
		rowRender(row, index) {
			return (
				<tr>
					{
						this.columns.map(column => {
							return (
								<td>
									{
										column.renderCell({ store: this.store, row, $index: index})
									}
								</td>
							)
						})
					}
				</tr>
			)
		},
	},

	render(h) {
		return (
			<table class="kw_table_body" cellspacing="0" cellpadding="0" border="0">
				<colgroup>
					{this.columns.map(column => <col name={column.id} key={column.id}/>)}
				</colgroup>
				<tbody>
					{
						this.data.reduce((prev, curr) => prev.concat(this.rowRender(curr, prev.length)), [])
					}
				</tbody>
			</table>
		)
	}
}
