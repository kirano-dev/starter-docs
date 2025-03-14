class ModalStore {
	constructor() {
		this.state = reactive({
			help: {}
		})
		
		this.modals = reactive({
			help: false
		})
	}
	
	open(name) {
		this.modals[name] = true
	}
	
	close(name) {
		this.modals[name] = false
	}
	
	toggle(name) {
		this.modals[name] = !this.modals[name]
	}
	
	setStateFor(name, state) {
		this.state[name] = state;
	}
}

export default new ModalStore();