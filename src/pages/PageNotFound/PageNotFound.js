import React from 'react'
export default function PageNotFound({main = "/"}){

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="py-5 text-center">
                        <h1>Ooops!</h1>
                        <h2>Error 404 Not Found</h2>
                        <div className="my-2">
                            Sorry, an error occurred. The requested page was not found!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}