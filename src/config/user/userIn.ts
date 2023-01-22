import {TInParam} from "../dataTypes";

// todo нужны типа параметров
export const userIn : {[k: string]: TInParam} = {
    userName: {k: "userName", name: "Имя"},
    login: {k: "login", name: "Логин"},
    pass: {k: "pass", name: "Пароль"},
    deviceUid: {k: "deviceUid", name: "Идентификатор устройства"},
    avatar: {k: "avatar", name: "Аватар"},
}