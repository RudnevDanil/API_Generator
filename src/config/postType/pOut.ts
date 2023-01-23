import {TFlagsInp, TOutParam} from "../dataTypes";

const pOut : TOutParam[] = [
    {k: "id", type: "MongoId"},
    {k: "badge", type: "string"},
    {k: "label", type: "string"},
    {k: "active", type: "bool"},
    {k: "logo", type: "MongoId"},
]

export const getOut : (flags: TFlagsInp) => TOutParam[]= (
    {

    }
) => {
    const byf :TOutParam[] = []

    //if(token) byf.push({k: "token", type: "token"})

    return [
        ...pOut,
        ...byf,
    ]
}