import Store from './index'

const createStore = () => new Store()

const mapState = function(arg) {
	let state = {}
	let type = typeof arg
	if (Array.isArray(arg)) {
		arg.forEach(item => state[item] = function() {
			return this.store.state[item]
		})
		return state
	} else if (type === 'object') {
		for (let key in arg) {
			if (typeof arg[key] === 'string') state[String(key)] = function() {
				return this.store.state[arg[key]]
			}
			else if (typeof arg[key] === 'function') state[String(key)] = function() {
				return arg[key](this.store.state)
			}
		}
		return state
	} else throw new Error(`type check failed for mapState. Expected Array, Object, got ${type.replace(/^\w?/, type[0].toUpperCase())}`)
}

export {createStore, mapState}
