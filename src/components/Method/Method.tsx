import {TInParam, TMethod} from "../../config/v1/dataTypes";
import {center} from "../../functions";
import React from "react";
import {makeAuthOnlyIcon, makeHUserOnlyIcon, renderMethodType} from "../../pages/Home/Home";
import {InParam} from "../InParam/InParam";
import {Response} from "../Response/Response";


export let Method = (
    {
        methodObj: {
            method,
            name,
            note,
            params,
            responses,
            isAuthOnly,
            isHUserOnly
        },
        pathNow
    }: {
        methodObj: TMethod,
        pathNow: string
    }) => {

    return (
        <div className="w-100 px-2 pt-3" key={pathNow}>
            <div className={"mb-2 rounded-3 fw-bold p-2 bg-dark text-white" + center()}>
                <div className="pe-2">{renderMethodType(method)}</div>
                {"Метод " + pathNow}
                <div className={"ps-2" + center('end')}>
                    {isAuthOnly && <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>}
                    {isHUserOnly && <div className="pe-2">{makeHUserOnlyIcon(isHUserOnly)}</div>}
                </div>
            </div>

            <div className={"py-2" + center('start')}>
                <div className="fw-bold pe-2">{"Описание:"}</div>
                <div className="">{name}</div>
            </div>

            {
                note &&
                <div className={"py-2" + center('start')}>
                    <div className="fw-bold pe-2">{"Прмиечание:"}</div>
                    <div className="">{note}</div>
                </div>
            }

            <div className={"py-2" + center('start', 'top')}>
                <div className="fw-bold pe-2">{"Параметры:"}</div>
                {
                    params && Boolean(params.length) ?
                        <div className="ps-3 w-100">
                            {params.map(param => (<InParam {...param as TInParam} key={(param as TInParam)?.k}/>))}
                        </div>
                        :
                        "Отсутствуют"
                }
            </div>

            {
                responses && Boolean(responses.length) &&
                <div className={"py-2" + center('start', 'top')}>
                    <div className="fw-bold pe-2">{"Ответы:"}</div>
                    <div className="ps-3 w-100">
                        {responses.map((response, i) => <Response {...response} key={i}/>)}
                    </div>
                </div>
            }

        </div>
    )
}