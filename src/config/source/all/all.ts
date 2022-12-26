import {TMethod, TInParam, TResponse} from "../../dataTypes";
import {response_401, response_500} from "../../responses";

export let inParam1 : TInParam = {
    k: "isAll",
    name: "Все",
    note: "Массив картинок. Приходят как formData.",
    defaultValue: "false",
    isHUserOnly: true,
}
export let inParam2 : TInParam = {
    k: "isAll2",
    name: "Все",
    note: "Массив картинок. Приходят как formData.",
    defaultValue: "false",
    isHUserOnly: true,
}

export let sourceResponse : TResponse = {
    code: 200,
    params: [
        {k: "id", type: "MongoId"},
        {k: "label", type: "string"},
        {k: "logo", type: "MongoId"},
        {k: "iaActive", type: "bool", isOptional: false, isAuthOnly: false, isHUserOnly: false},
        {k: "iaActive2", type: "bool", isOptional: true, isAuthOnly: true, isHUserOnly: true},

        {
            k: "arrExample",
            type: "array",
            note: "some array",
            inner: {k: "objExample", type: "object", inner: [
                    {k: "id", type: "MongoId"},
                    {k: "label", type: "string"},
                    {k: "logo", type: "MongoId"},
                ]
            },
        },
        
        {k: "objExample", type: "object", inner: [
                {k: "id", type: "MongoId"},
                {k: "label", type: "string"},
                {k: "logo", type: "MongoId"},
            ]
        },
    ],
    note: "Успешный ответ"
}

export let all : TMethod = {
    k: "all",
    method: "get",
    name: "Получение всех источников",
    shortName: "Все",
    params: [inParam1, inParam2],
    responses: [response_401, response_500, sourceResponse]
}