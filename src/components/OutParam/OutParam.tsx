import React from "react";
import {TOutParam} from "../../config/dataTypes";
import {center} from "../../functions";
import {makeAuthOnlyIcon, makeHUserOnlyIcon, makeOptionalIcon} from "../../pages/Home/Home";

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
                {type}
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