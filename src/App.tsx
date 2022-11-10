//import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";


export interface IParam {
    k: string;
    name: string;
    limitations?: {
        max: number,
        min: number,
    },
    note?: string;
}

export interface IResponse {
    code: number;
    msg: string;
    note?: string;
}

export interface IMethod {
    k: string;
    method: "get" | "post" | "put";
    name: string;
    shortName: string;
    note?: string;
    params: IParam[],
    responses: IResponse[],
}

export interface IMethodGroup {
    k: string;
    name: string;
    items: IMethod[]
}

export default function App() {

    let nav = [
        {
            k: "post",
            name: "Пост",
            items: [
                {
                    k: "create",
                    shortName: "Создание",
                    name: "Создание нового поста",
                    note: "Работает через раз :(",
                    method: "post",
                    params: [
                        {
                            k: "title",
                            name: "Название",
                            limitations: {
                                min: 10,
                                max: 120,
                            }
                        },
                        {
                            k: "text",
                            name: "Текст",
                        },
                        {
                            k: "imgs",
                            name: "Картинки",
                            note: "Массив картинок. Приходят как formData.",
                        },
                    ],
                    /*paramsExample: {
                        title: "Lorem ipsum",
                        text: "Lorem ipsum ".repeat(120),
                        imgs: "Картинки в formData",
                    },*/
                    responses: [
                        {
                            code: 500,
                            msg: 'Something get wrong :(',
                            note: "Внутренняя ошибка"
                        },
                    ]
                }
            ]
        }
    ]

    return (
        <BrowserRouter>
            <SnackbarProvider maxSnack={10}>
                <div className="App" style={{minHeight: "100vh", backgroundColor: "#eee"}}>

                    <div style={{backgroundColor: "#eee"}}>
                        <Routes>

                            <Route path="*" element={<Home nav={nav}/>}/>

                        </Routes>
                    </div>
                </div>
            </SnackbarProvider>
        </BrowserRouter>
    );
}