import React from "react"
import ReactDom from "react-dom/client"
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css"

import BookList from "./BookList"
import Form from "./Form"

const root = ReactDom.createRoot(document.querySelector("#root"))

root.render(
    <>
        <Form />
        <BookList />
    </>
)