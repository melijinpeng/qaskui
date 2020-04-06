export default class TableLayout {
	constructor(options) {
		this.observers = []
		this.table = null
		this.store = null
		this.columns = null

		this.height = null
		this.bodyWidth = null
		this.tableHeight = null
		this.headerHeight = null
		this.appendHeight = 0
		this.footerHeight = 44

		for (let name in options) if (options.hasOwnProperty(name)) this[name] = options[name]

		if (!this.table) throw new Error('table is required for Table Layout')
		if (!this.store) throw new Error('store is required for Table Layout')
	}

	addObserver(observer) { this.observers.push(observer) }
	removeObserver(observer) {
		const index = this.observers.indexOf(observer)
		if (index !== -1) this.observers = this.observers.splice(index, 1)
	}

	setHeight(value, prop = 'height') {

	}

	setMaxHeight(value) {

	}

	updateColumnsWidth() {
		const bodyWidth = this.table.$el.clientWidth
		let bodyMInWidth = 0


	}
}
