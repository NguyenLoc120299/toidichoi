import { uploadImage } from "../../untils/uploadImage"
import { getDataAPI, postDataAPI } from '../../untils/fetchData'
import { ALERT_ACTION } from '../actions/alertAction'
import { checkLogin } from "./authAction"
import { async } from "@firebase/util"
import { getReviewByPlace } from "./reviewAction"
export const PLACE_ACTIONS = {
    ADD_PLACE: "ADD_PLACE",
    GET_PLACES: "GET_PLACES",
    PLACE_SINGLE:"PLACE_SINGLE",
    LOADING:"LOADING"
}

export const addPlace = (formInput, displayImage, auth) => async (dispatch) => {
    try {
      
        if (dispatch(checkLogin(auth))){
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    loading: true
                }
            })
            const display_image = await uploadImage(displayImage)
            const res = await postDataAPI('places', {
                name: formInput.name,
                area: formInput.area,
                address: formInput.address,
                direct: formInput.direct,
                intro: formInput.intro,
                owner: '',
                time: {
                    min: formInput.time_min,
                    max: formInput.time_max
                },
                price: {
                    min: formInput.price_min,
                    max: formInput.price_max
                },
                type: formInput.typePlace,
                utities: formInput.utities,
                phone: formInput.phone,
                facbook: formInput.facebook,
                instagram: formInput.instagram,
                email: formInput.email,
                website: formInput.website,
                images: display_image
            })
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    success: res.data.msg
                }
             })
        }

    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }

}

export const getPlaces = () => async (dispatch) => {
    try {

        const result = await getDataAPI('places')
        dispatch({
            type: PLACE_ACTIONS.GET_PLACES,
            payload: result.data
        })
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}

export const getPlaceSingle=(id)=>async dispatch=>{
    try {
        // dispatch({
        //     type: ALERT_ACTION.ALERT,
        //     payload: {
        //         loading: true
        //     }
        // })
        const res= await getDataAPI(`place/${id}`)
        if(res && res.data){
            dispatch({
                type: PLACE_ACTIONS.PLACE_SINGLE,
                payload: res.data
            })
        }
        dispatch(getReviewByPlace(id))
        
        // dispatch({
        //     type: ALERT_ACTION.ALERT,
        //     payload: {
        //         loading: true
        //     }
        // })
        
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}

// export const searchPlaces=(name)=>async (dispatch)=> {
//     try {
        
        
//     } catch (error) {
//         dispatch({
//             type: ALERT_ACTION.ALERT,
//             payload: {
//                 err: error.response.data.msg
//             }
//         }) 
//     }
// }