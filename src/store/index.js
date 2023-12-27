import {createStore} from 'vuex'
import axios from "axios";

export default createStore ({
	state:{
		items: {},
		card: [],
		totalPrice: 0,
		count: 0,
		isAuth: false,
		fio: '',
		email: ''
	},
	mutations:{
		SET_ITEMS(state, value){
			state.items = value
		},
		SET_ITEM(state, value){
			state.items.push(value)
		},
		SET_ITEMS_TO_CARD(state, value){
			state.card = value
		},
		LOGIN(state){
			state.isAuth = true
		},
		LOGOUT(state){
			state.isAuth = false
		},
		SET_USER_DATA(state, value){
			state.fio = value.fio
			state.email = value.email
		}
	},
	getters:{
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
	actions:{
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
		login({commit}){
			commit('LOGIN')
		},
		logout({commit}){
			commit('LOGOUT')
		},
		saveUserData({commit}, data){
			commit('SET_USER_DATA', data)
		}
	}
})