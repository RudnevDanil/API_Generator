import {TParam} from "../../dataTypes";

export type CommonPaymentsFieldIsPaid = 'isPaid'
export type CommonPaymentsFieldPaymentText = 'paymentText'
export type CommonPaymentsFields = CommonPaymentsFieldIsPaid | CommonPaymentsFieldPaymentText
export const commonPayments: {[k in CommonPaymentsFields]: TParam} = {
    isPaid: {k: "isPaid", type: "bool", name: "Флаг платности"},
    paymentText: {k : "paymentText", type: "string", name: "Текст платности", isOptional: true},
}
export const commonPaymentsObject: TParam = {
    k: "payments",
    name: "платность",
    type: "object",
    inner: [
        commonPayments.isPaid,
        commonPayments.paymentText,
    ]
}
