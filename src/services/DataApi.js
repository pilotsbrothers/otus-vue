import axios from "axios";

export default {
	async getItems(){
		let items = JSON.parse(localStorage.getItem('items'))
		if(items === null){
			await axios.get('https://fakestoreapi.com/products').then((response) => {
				localStorage.setItem('items', JSON.stringify(response.data))
				items = response.data
			})
		}
		return items
	}
}