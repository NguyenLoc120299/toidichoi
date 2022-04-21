import { uploadImage } from "../../untils/uploadImage"

export const PLACE_ACTIONS={
    ADD_PLACE:"ADD_PLACE"
}

export const addPlace= (formInput,displayImage,menUImage)=>  async(dispatch)=>{
    try {
        const display_image = await uploadImage(displayImage)
        const menu_image= await uploadImage(menUImage)
    } catch (error) {
      
    }
  
}