import {createStore} from 'redux'

import reducer from './reducer'  //引入的总的reducer

var store = createStore(reducer);

export default store;


