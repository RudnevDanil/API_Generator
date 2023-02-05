import { commentAlreadyExist } from "./current/commentAlreadyExist";
import { commentNotFound } from "./current/commentNotFound";
import { createdByAnotherUser } from "./current/createdByAnotherUser";
import { notHUser } from "./current/notHUser";
import { offerAlreadyExist } from "./current/offerAlreadyExist";
import { postAlreadyExist } from "./current/postAlreadyExist";
import { postNotFound } from "./current/postNotFound";
import { smthWentWrong } from "./current/smthWentWrong";
import { unauthorized } from "./current/unathorized";
import { userExist } from "./current/userExist";
import { wrongParams } from "./current/wrongParams"

type TResponseKeys = 
    'wrongParams' | 
    'smthWentWrong' | 
    'unauthorized' | 
    'notHUser' | 
    'commentNotFound' |
    'postNotFound' | 
    'createdByAnotherUser' | 
    'userExist' |
    'postAlreadyExist' |
    'commentAlreadyExist' |
    'offerAlreadyExist'

const responsesConfig: {[k in number]: {[j in TResponseKeys]?: TResponse}} = {
    400: {
        wrongParams,
        commentNotFound,
        postNotFound,
        userExist,
    },
    401: {
        unauthorized,
        notHUser,
    },
    403: {
        createdByAnotherUser,
    },
    409: {
        postAlreadyExist,
        commentAlreadyExist,
        offerAlreadyExist
    },
    500: {
        smthWentWrong,
    }
}

export type TResponse = {
    msg: string,
    note?: string, // do we need this?
}

export type TResponsesBucketResponse = {
    code: number,
    id: string,
    msg: string,
}

export const responsesBucket = Object.entries(responsesConfig).reduce((s, [code, responses]) => {
    Object.entries(responses).forEach(([responseKey, {msg}]) => {
        s[responseKey as TResponseKeys] = {
            code: parseInt(code),
            id: `${code}_${msg}`, // do we need this?
            msg,
        } as TResponsesBucketResponse
    });
    return s
}, {} as {[k in TResponseKeys]: TResponsesBucketResponse})