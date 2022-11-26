import React from "react";
import {TMethodGroup} from "../../config/dataTypes";
import {center} from "../../functions";
import {MethodShort} from "../MethodShort/MethodShort";


export let NavConfigTreeElement = (
    {
        treeElement: {
            k,
            name,
            items,
        },
        isPathIncludeKey,
        changeOpenStatus,
        isOpened,
    }
     : {
        treeElement: TMethodGroup,
        isPathIncludeKey: (k: string) => boolean,
        changeOpenStatus: () => void,
        isOpened: boolean,
    }) => {

    return (
        <div
            className="py-2 ps-2"
            style={{
                borderBottom: "1px solid white",
                cursor: 'pointer'
            }}
            key={k}
        >
            <div
                className={center('start')}
                onClick={changeOpenStatus}
            >
                <i className={`fas fa-chevron-${isOpened ? 'down' : 'right'}`}/>
                <div className={"ps-2 " + (isPathIncludeKey(k) ? "fw-bold" : "")} style={{userSelect: 'none'}}>{name}</div>
                <div className="ps-2" style={{fontSize: "0.8rem", color: "lightgrey"}}>
                    {"/" + k}
                </div>
            </div>

            {isOpened && items.map((item) => <MethodShort method={item} parentKey={k} isPathIncludeKey={isPathIncludeKey} key={item.k}/>)}
        </div>
    )
}