import {TParam} from "../../dataTypes";
import {User} from "./model";
import {getCommonDatesParam} from "../../common/dates";

export type TPOutKeys = "auth" | "markList" | "user" | "userAsCreator" | "dates" | "flags"
export const pOut : {[k in TPOutKeys] : TParam} =  {
    auth: {
        k: "auth",
        name: "авторизация",
        type: "object",
        inner: [
            User.login,
            User.token,
        ]
    },
    markList: User.markList,
    user: {
        k: "user",
        name: "пользователь",
        type: "object",
        inner: [
            User.id,
            User.userName,
            User.commentsCreated,
            User.pointsCreated,
            User.markedAmount,
            User.avatar,
        ]
    },
    userAsCreator: {
        k: "creator",
        name: "создатель",
        type: "object",
        inner: [
            User.id,
            User.userName,
            User.avatar,
        ]
    },
    dates: getCommonDatesParam([
        User.created,
        User.updated,
    ]),
    flags: {
        k: "flags",
        name: "флаги",
        type: "object",
        inner: [
            User.hUser,
            User.active,
        ],
        isHUserOnly: true
    },
}