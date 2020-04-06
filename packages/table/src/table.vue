<template>
	<div class="kw-table">
		<div class="hidden-columns" ref="hiddenColumns"><slot/></div>
		<div class="kw-table__header-wrap">
			<table-header :store="store"/>
		</div>
		<div class="kw_table_body">
			<table-body :store="store"/>
		</div>
	</div>
</template>

<script>
	import { createStore, mapState } from './store/helper'
	import TableLayout from './table-layout'
	// import TableFooter from './table-footer'
	// import { parseHeight } from './util'

	let tableIdSeed = 1

	export default {
		name: 'KwTable',

		// mixins: [Locale, Migrating],

		props: {
			data: { type: Array, default: () => [] },
			width: [String, Number],
			height: [String, Number],
			maxHeight: [String, Number],
			rowHeight: [String, Number],
			stipe: Boolean, // 是否为斑马纹 table
			border: Boolean,  // 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用border属性，它接受一个Boolean，设置为true即可启用

			// 以下是扩展功能，
			headerRowStyle: [Object, Function],
			headerRowClassName: [String, Function],
			rowClassName: [String, Function], // 可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态
		},
		data() {
			this.store = createStore(this)
			const layout = new TableLayout({
				store: this.store,
				table: this,
			})
			return {
				layout,
			}
		},
		computed: {
			...mapState(['columns']),
		},

		components: {
			TableHeader: () => import('./table-header.js'),
			TableBody: () => import('./table-body.js'),
		},

		beforeCreate() {
			// console.log(this.$slots.default)
		},
		created() {
			this.tableId = 'kw-table_' + tableIdSeed++
			this.store.commit('updateRowHeight', this.rowHeight)
		},

		watch: {
			data: {
				handler(value) {
					this.store.commit('setData', value)
				},
				immediate: true,
				deep: true,
			},
		},

		methods: {

		}
	}
</script>
