// 对外提供对组件的引用，注意组件必须声明 name
import KwButton from './src/button'
// 为组件提供 install 安装方法，供按需引入
KwButton.install = Vue => Vue.component(KwButton.name, KwButton)
export default KwButton