import {TParam} from "../../dataTypes";
import {commonDates, CommonDatesFields} from "../../common/dates";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";

export type UserFields =
    CommonIdField |
    CommonDatesFields |
    CommonActiveField |
    "userName" | "login" | "pass" |
    "pointsCreated" | "commentsCreated" |
    "markList" | "markedAmount" |
    "avatar" |
    "deviceUid" | "token" |
    "hUser"
export const User : {[k in UserFields]: TParam} = {
    id: commonId,

    userName: {k : "userName", type: "string", name: "имя"},
    login: {k : "login", type: "string", name: "логин"},
    pass: {k : "pass", type: "bcryptHash", name: "хэш пароля"},

    updated: commonDates.updated,
    created: commonDates.created,

    pointsCreated: {k : "pointsCreated", type: "int", name: "кол-во постов"},
    commentsCreated: {k : "commentsCreated", type: "int", name: "кол-во комментов"},
    markedAmount: {k : "markedAmount", type: "int", name: "кол-во маркнутых"},

    markList: {k : "markList", type: "array", inner: [{k: "smth", type: "MongoId", name: "id поста"}], name: "список маркнутых постов", defaultValue: "[]"},

    avatar: {k : "avatar", type: "MongoId", name: "аватар", isOptional: true},

    deviceUid: {k : "deviceUid", type: "string", name: "идентификатор устройства"},
    token: {k : "token", type: "jwt", name: "токен доступа"},

    hUser: {k : "hUser", type: "bool", name: "супер пользователь"},

    active: commonActive,
}