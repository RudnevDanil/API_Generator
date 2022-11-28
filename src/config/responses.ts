import {TResponse} from "./dataTypes";

export let response_401 : TResponse = {
    code: 401,
    msg: 'unauthorized',
    note: "Ошибка авторизации"
}

export let response_500 : TResponse = {
    code: 500,
    msg: 'Something get wrong :(',
    note: "Внутренняя ошибка"
}