import {logOut} from "./redux/actions/auth";

let reaction_401 = (dispatch, {quiet = true}) => {
    dispatch(logOut('vesa'))
    if(!quiet)
        alert("Ошибка авторизации")
}

let reaction_404 = (dispatch, {quiet = true}) => {
    if(!quiet)
        alert("Неизвестный запрос")
}

let reaction_500 = dispatch => {
    alert("Неизвестная ошибка на сервере !")
}

let disconnect = dispatch => {
    alert("Сервер не отвечает")
}

export let standardReactions = (dispatch, params = {}) => ({
    null: () => disconnect(dispatch),
    401: () => reaction_401(dispatch, params[401] || {}),
    //404: () => reaction_404(dispatch, params[404] || {quiet: false}),
    500: () => reaction_500(dispatch),
})