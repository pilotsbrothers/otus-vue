import axios from "axios";

const app = {
	state: {
		items: {},
	},
	mutations: {
		SET_ITEMS(state, value){
			state.items = value
		},
		SET_ITEM(state, value){
			state.items.push(value)
		},
	},
	actions: {
		async getItems({commit, state}){
			if(Object.keys(state.items).length === 0) {
				await axios.get('https://fakestoreapi.com/products').then((response) => {
					commit('SET_ITEMS', response.data)
				})
			}
		},
		addItem({commit}, item){
			commit('SET_ITEM',item)
		},

	}
}

export default app