import {NavLink} from "react-router-dom";
import React from "react";
import {TMethod} from "../../config/dataTypes";
import {center} from "../../functions";
import {makeAuthOnlyIcon, makeHUserOnlyIcon, renderMethodType} from "../../pages/Home/Home";
import {baseRoute} from "../../constants";

export let MethodShort = (
    {
        method: {
            k,
            shortName,
            method,
            isAuthOnly,
            isHUserOnly
        },
        parentKey,
        isPathIncludeKey,
    }: {
        method: TMethod,
        parentKey: string,
        isPathIncludeKey: (k: string) => boolean,
    }) => {

    return (
        <NavLink
            className={"text-decoration-none text-white"}
            to={baseRoute + '/' + parentKey + '/' + k}
        >
            <div
                className="my-2 ps-3 rounded-3"
                style={{
                    borderLeft: "1px solid white",
                    borderRight: "1px solid white",
                }}
            >
                <div className={(isPathIncludeKey(k) ? "fw-bold" : "") + center('start')}>
                    {shortName}
                    <div className={"ps-2" + center('end')}>
                        {isAuthOnly && <div className="pe-2">{makeAuthOnlyIcon(isAuthOnly)}</div>}
                        {isHUserOnly && <div className="pe-2">{makeHUserOnlyIcon(isHUserOnly)}</div>}
                    </div>
                </div>
                <div className={center('start')} style={{fontSize: "0.8rem", color: "lightgrey"}}>
                    {renderMethodType(method)}
                    <div className="ps-2">{"/" + k}</div>
                </div>
            </div>
        </NavLink>
    )
}