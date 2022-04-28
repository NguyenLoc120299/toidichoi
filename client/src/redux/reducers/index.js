import { combineReducers } from 'redux'
import alert from '../reducers/alertReducer'
import categories from '../reducers/categoryReducer'
import area from './areaReducer'
import utities from './utitiesReducer'
import image from './imageReducer'
import auth from './authReducer'
import place from './placeReducer'
import detail_place from './detailPlaceReducer'
export default combineReducers({
    categories,
    alert,
    area,
    utities,
    image,
    auth,
    place,
    detail_place

})