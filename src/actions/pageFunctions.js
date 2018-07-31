import axios from 'axios'
import store from '../components/store.js'

export function getInfo() {
	axios.get('https://api.github.com/users/victorinspace').then(resp => {
		store.dispatch({
			type: 'GET_INFO',
			payload: resp.data
		})
	})
}

export function getRepo() {
	axios.get('http://api.github.com/users/victorinspace/repos').then(resp => {
		store.dispatch({
			type: 'GET_REPO',
			payload: resp.data
		})
	})
}