import Vue from 'vue'
import Watcher from './watcher'
import {mutations} from './mutations'

export default class Store extends Watcher {
	constructor() {
		super()
		this.mutations = mutations
	}

	commit(name, ...args) {
		if (this.mutations[name]) this.mutations[name](this.state, ...args)
		else throw new Error(`Mutaion not fund: ${name}`)
	}

	updateTableScrollY() {
		// Vue.nextTick(this.updateTableScrollY.updateScrollY)
	}
}
