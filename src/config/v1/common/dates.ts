import {TParam} from "../../dataTypes";

export type CommonDatesFieldUpdated = 'updated'
export type CommonDatesFieldCreated = 'created'
export type CommonDatesFields = CommonDatesFieldUpdated | CommonDatesFieldCreated
export const commonDates: {[k in CommonDatesFields]: TParam} = {
    updated: {k : "updated", type: "date", name: "обновлен"},
    created: {k : "created", type: "date", name: "создан"},
}
export const getCommonDatesParam = (inner: TParam[]): TParam => ({
    k: "dates",
    name: "даты",
    type: "object",
    inner,
    isHUserOnly: true
})