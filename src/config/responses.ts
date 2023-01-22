import {TResponse} from "./dataTypes";

export const response_400 : TResponse = {
    code: 400,
    msg: 'wrong input params',
    note: "Ошибка параметров"
}
export const response_401 : TResponse = {
    code: 401,
    msg: 'unauthorized',
    note: "Ошибка авторизации"
}

export const response_401_notHUser : TResponse = {
    code: 401,
    msg: 'not hUser',
    note: "Ошибка авторизации"
}

export const response_500 : TResponse = {
    code: 500,
    msg: 'Something get wrong :(',
    note: "Внутренняя ошибка"
}