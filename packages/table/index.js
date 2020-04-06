// 对外提供对组件的引用，注意组件必须声明 name
import ElTable from './src/table'
// 为组件提供 install 安装方法，供按需引入
ElTable.install = Vue => Vue.component(ElTable.name, ElTable)
export default ElTable