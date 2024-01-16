import {createStore} from 'vuex'
import card from "./modules/card";
import user from "./modules/user";
import app from "./modules/app";


export default createStore ({
	modules: {
		app,
		user,
		card
	}
})