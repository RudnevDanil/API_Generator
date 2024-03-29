import React from "react";
import {TOutParam, TOutParamTypes} from "../../config/v1/dataTypes";
import {center} from "../../functions";
import {makeAuthOnlyIcon, makeBracketIconIcon, makeHUserOnlyIcon, makeOptionalIcon} from "../../pages/Home/Home";
import {colors} from "../../constants";


const OutTypeLabel = ({type}: {type: TOutParamTypes}) => {
    if(type === "object" || type === "array"){
        const brackets = {
            object: {tooltip: "Объект", brackets: "{ }"},
            array: {tooltip: "Массив", brackets: "[ ]"},
        }
        return makeBracketIconIcon(brackets[type])
    }
    return <>{type}</>
}

export let OutParam = (
    {
        k,
        type,
        inner,
        note,
        isOptional,
        isAuthOnly,
        isHUserOnly
    } : TOutParam) => {

    return (
        <div className="w-100 my-2 p-2 border border-dark rounded-3 bg-white" key={k}>
            <div className={center('start')}>
                <div className="pe-2">{makeOptionalIcon(isOptional)}</div>
                <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>
                <div className="pe-4">{makeHUserOnlyIcon(isHUserOnly)}</div>
                <div className="pe-3 fw-bold">{k}</div>
                <OutTypeLabel type={type}/>
            </div>
            {note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
            {["array", "object"].includes(type) && inner &&
                <div className="ps-3">
                    {
                        Array.isArray(inner) ?
                            inner.map(innerEl => <OutParam {...innerEl} key={innerEl.k}/>)
                            :
                            <OutParam {...inner}/>
                    }
                </div>
            }
        </div>
    )
}