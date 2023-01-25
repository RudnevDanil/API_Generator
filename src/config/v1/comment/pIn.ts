import {TInParam} from "../../dataTypes";

// todo нужны типа параметров
export const pIn : {[k: string]: TInParam} = {
    postId: {k: "postId", name: "пост"},
    commentId: {k: "commentId", name: "коммент"},
    rating: {k: "rating", name: "рейтинг", limitations: { min: 0, max: 5 }},
    text: {k: "text", name: "коммент"},
    limit: {k: "limit", name: "лимит", defaultValue: "10"},
    offset: {k: "offset", name: "сдвиг", defaultValue: "0"},
    imgs: {k: "imgs", name: "картинки", defaultValue: "[]", note: "массив"},


    //label: {k: "label", name: "Имя"},
    //active: {k: "active", name: "Активный"},
    //logo: {k: "logo", name: "Иконка"},
}