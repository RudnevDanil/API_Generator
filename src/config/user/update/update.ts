import {TMethod, TResponse} from "../../dataTypes";
import {response_400, response_401, response_401_notHUser, response_500} from "../../responses";
import {userIn} from "../userIn";
import {allOptional} from "../../functions";

export let successResponse : TResponse = {
    code: 200,
    params: [
        {
            k: "",
            type: "object",
            inner: [
                {k: "avatarId", type: "MongoId", isOptional: true}
            ]
        },
    ],
    note: "Успешный ответ"
}

export let update : TMethod = {
    k: "update",
    method: "put",
    name: "Обновление пользователя",
    shortName: "Обновление",
    isAuthOnly: true,
    params: allOptional([
        userIn.pass,
        {...userIn.avatar},
        {...userIn.userName, isHUserOnly: true},
        {...userIn.login, isHUserOnly: true},
        {k: "removeAvatar", name: "Флаг удаления аватара", isHUserOnly: true},
        {k: "currentUser", name: "Эмуляция действий пользователя", isHUserOnly: true},
    ]),
    responses: [successResponse, response_400, response_401, response_401_notHUser, response_500]
}