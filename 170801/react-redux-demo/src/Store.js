import { createStore } from 'redux';
import Reducer from './Reducer'

var initState = {
	First: 0,
	Second: 10,
	Third: 20
}

var store = createStore(Reducer,initState);


export default store;