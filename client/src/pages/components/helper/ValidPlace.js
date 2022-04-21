export const isDisableSubmit = (formInput) => {
    let err = {}
    if (formInput.name === '') {
        err.name = "Tên không được rỗng"
    }
    if (formInput.name.length > 200) {
        err.name = "Tên không được dài quá 200 kí tự"
    }
    if (formInput.area === '') {
        err.area = "Vui lòng chọn khu vực"
    }
    if (formInput.address === '') {
        err.address = "Vui lòng nhập địa chỉ"
    }
    // if (!Number.isInteger(formInput.time_min)) {
    //     err.time_min = "Vui lòng nhập số"
    // }
    // if (!Number.isInteger(formInput.time_max)) {
    //     err.time_max = "Vui lòng nhập số"
    // }
    if (parseInt(formInput.time_max)<0 ) {
        err.time_max = "Thời gian phải lớn hơn hoặc bằng 0"
    }
    if (parseInt(formInput.time_min) < 0) {
        err.time_min = "Thời gian phải lớn hơn hoặc bằng 0"
    }
    if (parseInt(formInput.time_max) > 24) {
        err.time_max = "Thời gian phải nhỏ hơn 24"
    }
    // if (parseInt(formInput.time_min) > 24) {
    //     err.time_min = "Thời gian phải nhỏ hơn 24"
    // }
    // if (!Number.isInteger(formInput.price_min)) {
    //     err.price_min = "Vui lòng nhập số"
    // }
    // if (!Number.isInteger(formInput.price_max)) {
    //     err.price_max = "Vui lòng nhập số"
    // }
    if (parseFloat(formInput.price_max) < 0) {
        err.price_max = "Giá phải lớn hơn hoặc bằng 0"
    }
    if (parseFloat(formInput.price_min) < 0) {
        err.price_min = "Giá phải lớn hơn hoặc bằng 0"
    }
    return {
        msg:err,
        errNumber:Object.keys(err).length
    }
    
}