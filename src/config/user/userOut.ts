import {TFlagsInp, TOutParam} from "../dataTypes";

const userOut : TOutParam[] = [
    {k: "userId", type: "MongoId"},
    {k: "name", type: "string"},
    {k: "login", type: "string"},
    {k: "creationDate", type: "date"},
    {k: "pointsCreated", type: "int"},
    {k: "commentsCreated", type: "int"},
    {k: "hUser", type: "bool"},
    {k: "active", type: "bool"},
    {k: "avatarId", type: "MongoId"},
]

export const getUserOut : (flags: TFlagsInp) => TOutParam[]= (
    {
        token ,
        marked ,
    }
) => {
    const byf :TOutParam[] = []

    if(token) byf.push({k: "token", type: "token"})

    if(marked) byf.push({k: "markedPosts", type: "array", note: "тут нужно уточнить, пока что []"})
    if(marked) byf.push({k: "markedPostsAmount", type: "int"})

    return [
        ...userOut,
        ...byf,
    ]
}