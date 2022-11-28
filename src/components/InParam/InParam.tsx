import React from "react";
import {TInParam} from "../../config/dataTypes";
import {makeAuthOnlyIcon, makeHUserOnlyIcon, makeOptionalIcon} from "../../pages/Home/Home";
import {center} from "../../functions";

export let InParam = (
    {
        k,
        name,
        limitations,
        note,
        defaultValue,
        isOptional,
        isAuthOnly,
        isHUserOnly,
    } : TInParam) => {

    return (
        <div className="w-100 mb-2 p-2 border border-dark rounded-3 bg-white" key={k}>
            <div className={center('start')}>
                <div className="pe-2">{makeOptionalIcon(isOptional)}</div>
                <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>
                <div className="pe-2">{makeHUserOnlyIcon(isHUserOnly)}</div>
                <div className="pe-3 fw-bold">{name}</div>
                {k + (defaultValue && " = " + defaultValue)}
            </div>
            {note && <div className="text-grey" style={{fontSize: "0.8rem"}}>{note}</div>}
            {
                limitations && <div className="text-grey" style={{fontSize: "0.8rem"}}>
                    {limitations.min ? "От " + limitations.min : null}
                    {limitations.max ? (limitations.min ? " до" : "До") + " " + limitations.max : null}
                </div>
            }
        </div>
    )
}