const user = {
	state: {
		isAuth: false,
		fio: '',
		email: ''
	},
	mutations: {
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
	actions: {
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
}

export default user