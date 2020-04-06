// 对外提供对组件的引用，注意组件必须声明 name
import KwTableColumn from '../table/src/table-column.js'
// 为组件提供 install 安装方法，供按需引入
KwTableColumn.install = Vue => Vue.component(KwTableColumn.name, KwTableColumn)
export default KwTableColumn
