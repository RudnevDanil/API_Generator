import {TParam} from "../../../dataTypes";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";

export type PostTypeFields = CommonIdField | "label" | "badge" | "icon" | CommonActiveField
export const PostType : {[k in PostTypeFields]: TParam} = {
    id: commonId,
    label: {k : "label", type: "string", name: "название"},
    badge: {k : "badge", type: "string", name: "бэйдж", isHUserOnly: true},
    icon: {k : "icon", type: "MongoId", name: "картинка", isOptional: true},
    active: commonActive,
}