import React from "react"
import ReactDOM from "react-dom"
import Index from "./containers/index"

const indexContainer = document.getElementById("index-container")

const App = () => {
    return (
        <Index />
    )
}

ReactDOM.render(<App />, indexContainer)

