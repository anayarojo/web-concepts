import React from "react"
import Navigation from "../sections/navigation"
import Hero from "../sections/hero"
import Product from "../sections/product"
import Feactures from "../sections/feactures"
import "./index.styl"

const Index = (props) => {

    return (
        <div className="index-page">
            <Navigation />
            <Hero /> 
            <Product />
            <Feactures />
        </div>
    )
}

export default Index