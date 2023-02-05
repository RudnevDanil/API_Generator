import {TParam} from "../../dataTypes";
import {commonActive, CommonActiveField} from "../../common/active";
import {commonId, CommonIdField} from "../../common/id";

export type SourceFields = CommonIdField | "label" | "icon" | CommonActiveField
export const Source : {[k in SourceFields]: TParam} = {
    id: commonId,
    label: {k : "label", type: "string", name: "название"},
    icon: {k : "icon", type: "MongoId", name: "картинка", isOptional: true},
    active: commonActive,
}