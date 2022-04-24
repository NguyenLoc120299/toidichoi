import { combineReducers } from 'redux'
import alert from '../reducers/alertReducer'
import categories from '../reducers/categoryReducer'
import area from './areaReducer'
import utities from './utitiesReducer'
import image from './imageReducer'
import auth from './authReducer'
export default combineReducers({
    categories,
    alert,
    area,
    utities,
    image,
    auth

})