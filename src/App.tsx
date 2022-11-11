//import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";
import {TMethodGroup} from "./config/dataTypes";
import {postGroup} from "./config/post/postGroup";
import {sourceGroup} from "./config/source/sourceGroup";

export default function App() {



    let nav : TMethodGroup[] = [
        postGroup,
        sourceGroup,
    ]

    let _nav = [
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