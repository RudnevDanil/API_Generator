import {TParam} from "../../dataTypes";

export type CommonDatesFields = 'updated' | 'created'
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