import ploarisreducer from './ploarisreducer'
import {combineReducers} from 'redux';

var reducer = combineReducers({
    ploaris:ploarisreducer
})

export default reducer;
