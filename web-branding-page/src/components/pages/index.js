import React from "react"
import Navigation from "../sections/navigation"
import Hero from "../sections/hero"
import "./index.styl"

const Index = (props) => {

    return (
        <div className="index-page">
            <Navigation />
            <Hero /> 
        </div>
    )
}

export default Index