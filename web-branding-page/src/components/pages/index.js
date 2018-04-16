import React from "react"
import Navigation from "../sections/navigation"
import Hero from "../sections/hero"
import Product from "../sections/product"
import Feactures from "../sections/feactures"
import RelatedProducts from "../sections/related-products"
import Plans from "../sections/plans"
import Clients from "../sections/clients"
import Contact from "../sections/contact"
import Footer from "../sections/footer"
import "./index.styl"
import "../commons/animate.css"

const Index = (props) => {

    return (
        <div className="index-page">
            <Navigation headerFixed={props.state.headerFixed} mobile={props.state.mobile} />
            <Hero mobile={props.state.mobile} /> 
            <Product mobile={props.state.mobile} />
            <Feactures mobile={props.state.mobile} />
            <RelatedProducts mobile={props.state.mobile} />
            <Plans mobile={props.state.mobile} />
            <Clients mobile={props.state.mobile} />
            <Contact mobile={props.state.mobile} handleContactSubmit={props.handleContactSubmit} />
            <Footer mobile={props.state.mobile} />
        </div>
    )
}

export default Index