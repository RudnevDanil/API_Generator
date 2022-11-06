import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from "notistack";
import "moment/locale/ru";
import "moment/locale/en-gb";

import Home from "./pages/Home/Home";

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
                    paramsExample: {
                        title: "Lorem ipsum",
                        text: "Lorem ipsum ".repeat(120),
                        imgs: "Картинки в formData",
                    }
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