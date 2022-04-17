import { combineReducers } from 'redux'
import alert from '../reducers/alertReducer'
import categories from '../reducers/categoryReducer'
import area from './areaReducer'
import utities from './utitiesReducer'
import image from './imageReducer'
export default combineReducers({
    categories,
    alert,
    area,
    utities,
    image

})