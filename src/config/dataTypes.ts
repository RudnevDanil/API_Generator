export type TParam = {
    k: string;
    name: string;
    limitations?: {
        max: number,
        min: number,
    },
    note?: string;
}

export type TResponse = {
    code: number;
    msg: string;
    note?: string;
}

export type TMethod = {
    k: string;
    method: "get" | "post" | "put";
    name: string;
    shortName: string;
    note?: string;
    params: TParam[],
    responses: TResponse[],
}

export type TMethodGroup = {
    k: string;
    name: string;
    items: TMethod[]
}