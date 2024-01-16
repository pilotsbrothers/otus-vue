const card = {
	state: {
		card: [],
		totalPrice: 0,
		count: 0,
	},
	mutations: {
		SET_ITEMS_TO_CARD(state, value){
			state.card = value
		},
	},
	getters: {
		totalPrice(state){
			let totalPrice = 0
			if(state.card.length > 0) {
				state.card.forEach((item) => {
					if (item.hasOwnProperty('price') && item.hasOwnProperty('count')) {
						totalPrice += item.price * item.count
					}
				})
			}
			return totalPrice
		},
		totalCount(state){
			let totalCount = 0
			if(state.card.length > 0) {
				state.card.forEach((item) => {
					if (item.hasOwnProperty('count')) {
						totalCount += item.count
					}
				})
			}
			return totalCount
		}
	},
	actions: {
		setItemToCard({commit, state}, data){
			let items = state.card
			let inCard = false
			items.forEach((item) => {
				if(parseInt(item.id) === parseInt(data.id)){
					inCard = true
					item.count++
				}
			})
			if(inCard === false){
				data.count = 1
				items.push(data)
			}
			commit('SET_ITEMS_TO_CARD', items)
		},
		subtractItemFromCard({commit, state}, data){
			let items = state.card
			let key = -1
			items.forEach((item, index) => {
				if(parseInt(item.id) === parseInt(data.id)){
					key = index
					item.count--
				}
			})
			if(items[key].count === 0){
				if(items.length > 1)
					items.splice(key, 1)
				else items = []
			}
			commit('SET_ITEMS_TO_CARD', items)
		},
	}
}

export default card