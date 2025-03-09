class Intersection {
	constructor() {
		this.isVisible = reactive({
			start: false,
			'file-structure': false,
			naming: false,
			import: false,
			formats: false,
			rules: false,
			'repository-pattern': false,
			dependencies: false,
		})
	}
}

export default new Intersection()