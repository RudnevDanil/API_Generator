import {TParam} from "../dataTypes";
import {User, UserFields} from "./model";
import {activeOnly} from "../pIn";

export type TIn = UserFields | 'activeOnly'
export const pIn : {[k in TIn]?: TParam} = {
    userName: User.userName,
    login: User.login,
    pass: User.pass,
    deviceUid: User.deviceUid, // is it in User or at all requests???
    avatar: User.avatar,

    activeOnly,
}