import axios from "axios";

export default {
	getItems(){
		return  axios.get('https://fakestoreapi.com/products').then((response) => {
			return response.data
		})
	}
}