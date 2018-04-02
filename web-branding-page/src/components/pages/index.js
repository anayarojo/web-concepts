import React from "react"
import Navigation from "../sections/navigation"
import Hero from "../sections/hero"
import Product from "../sections/product"
import Feactures from "../sections/feactures"
import RelatedProducts from "../sections/related-products"
import Plans from "../sections/plans"
import Clients from "../sections/clients"
import "./index.styl"

const Index = (props) => {

    return (
        <div className="index-page">
            <Navigation />
            <Hero /> 
            <Product />
            <Feactures />
            <RelatedProducts />
            <Plans />
            <Clients />
        </div>
    )
}

export default Index