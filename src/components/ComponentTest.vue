<template>
	<div class="">
		<kw-table :data="list" :header-row-style="kwTableHeaderRowStyle">
			<kw-table-column prop="id" label="编号" width="50"></kw-table-column>
			<kw-table-column prop="name" label="姓名" width="100"></kw-table-column>
			<kw-table-column prop="behavior" label="行为" width="500"></kw-table-column>
			<kw-table-column label="操作" width="600">
				<template #default="{$index, row}">
					<kw-button @click="handleEdit(row)">编辑</kw-button>
					<kw-button @click="handleRemove($index, row)" type="primary">删除</kw-button>
				</template>
			</kw-table-column>
		</kw-table>
	</div>
</template>

<script>
export default {
	name: 'ComponentTest',

	data() {
		return {
			list: [
				{
					id: 1,
					name: '狗蛋',
					behavior: '狗剩他哥，喜欢掏鸟蛋',
				},
				{
					id: 2,
					name: '狗剩',
					behavior: '就知道吃吃鸟蛋',
				},
				{
					id: 3,
					name: '二狗',
					behavior: '到处跑，找鸟窝',
				},
				{
					id: 4,
					name: '二多',
					behavior: '负责找柴火和烧火',
				},
				{
					id: 5,
					name: '草包',
					behavior: '看别人掏鸟蛋和看别人吃',
				},
			],
		}
	},
	computed: {
		kwTableHeaderRowStyle() {
			// return {backgroundColor: '#E3F8F5', height: '60px'}
		}
	},

	methods: {
		handleEdit() {

		},
		handleRemove(index, row) {
			console.log(index, row)
		},
	}
}
</script>

<style lang="scss" scoped>
.test-table_header {
	background-color: #f0f;
}
</style>
