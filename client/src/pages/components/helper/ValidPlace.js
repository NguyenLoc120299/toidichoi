const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
const validTime = (time) => {
    return String(time)
        .toLowerCase()
        .match(
            /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
        )
}
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
    if (parseInt(formInput.time_max) < 0) {
        err.time_max = "Thời gian phải lớn hơn hoặc bằng 0"
    }
    if (parseInt(formInput.time_min) < 0) {
        err.time_min = "Thời gian phải lớn hơn hoặc bằng 0"
    }
    if (parseInt(formInput.time_max) > 24) {
        err.time_max = "Thời gian phải nhỏ hơn 24"
    }
    if (!validTime(formInput.time_min)) err.time_min = "Vui lòng nhập đúng định dạng HH:MM"
    if (!validTime(formInput.time_max)) err.time_max = "Vui lòng nhập đúng định dạng HH:MM"
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
        msg: err,
        errNumber: Object.keys(err).length
    }

}
export const isCheckFormInput = (username, email, password, confirmPassword) => {
    let err = {}
    if (username.length > 15) err.username = "Tên người dùng nhỏ hơn 15 kí tự"
    if (username === "") err.username = "Tên người dùng không được để rỗng"
    if (!validateEmail(email)) err.email = "Email không đúng định dạng"
    if (password === '') err.password = "Password không được để rỗng"
    if (password !== confirmPassword) err.confirmPassword = "Xác nhận mật khẩu không trùng khớp"
    return {
        msg: err,
        errNumber: Object.keys(err).length
    }
}