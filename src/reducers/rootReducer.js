
import studentReducer from '../reducers/studentReducer';
import { combineReducers } from 'redux';


const appReducer = combineReducers({
	studentRoot:studentReducer
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer