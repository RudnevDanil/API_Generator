import {TResponse} from "./dataTypes";

// todo названия всем даже дефолтным
export const response_400 : TResponse = {
    code: 400,
    msg: 'wrong input params',
    note: "Ошибка параметров"
}

export const response_400_comment_not_found : TResponse = {
    code: 400,
    msg: 'comment not found',
    note: "Ошибка параметров"
}


export const response_400_post_not_found : TResponse = {
    code: 400,
    msg: 'post not found',
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

export const response_403 : TResponse = {
    code: 403,
    msg: 'created by another user',
    note: "Ошибка параметров"
}

export const response_500 : TResponse = {
    code: 500,
    msg: 'Something get wrong :(',
    note: "Внутренняя ошибка"
}