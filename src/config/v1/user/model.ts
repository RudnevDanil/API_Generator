import {TParam} from "../../dataTypes";

export type UserFields =
    "id" | "userName" | "login" | "pass" |
    "updated" | "created" |
    "pointsCreated" | "commentsCreated" |
    "markList" | "markedAmount" |
    "avatar" |
    "deviceUid" | "token" |
    "hUser" | "active"
export const User : {[k in UserFields]: TParam} = {
    "id": {k : "id", type: "MongoId", name: "ID"},
    "userName": {k : "userName", type: "string", name: "имя"},
    "login": {k : "login", type: "string", name: "логин"},
    "pass": {k : "pass", type: "bcryptHash", name: "хэш пароля"},

    "updated": {k : "updated", type: "date", name: "обновлен"},
    "created": {k : "created", type: "date", name: "создан"},

    "pointsCreated": {k : "pointsCreated", type: "int", name: "кол-во постов"},
    "commentsCreated": {k : "commentsCreated", type: "int", name: "кол-во комментов"},
    "markedAmount": {k : "markedAmount", type: "int", name: "кол-во маркнутых"},

    "markList": {k : "markList", type: "array", inner: [{k: "smth", type: "MongoId", name: "id поста"}], name: "список маркнутых постов", defaultValue: "[]"},

    "avatar": {k : "avatar", type: "MongoId", name: "аватар", isOptional: true},

    "deviceUid": {k : "deviceUid", type: "string", name: "идентификатор устройства"},
    "token": {k : "token", type: "jwt", name: "токен доступа"},

    "hUser": {k : "hUser", type: "bool", name: "супер пользователь"},
    "active": {k : "active", type: "bool", name: "активный"},
}