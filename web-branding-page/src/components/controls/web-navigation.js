import React from "react"
import ScrollSpy from "react-scrollspy"
import Control from "../commons/shape-container"
import Text from "../controls/text"
import SpyLink from "../controls/spy-link"

const WebNavigation = (props) => {

    const Styles =  {
        display: "flex",
        flexDirection: "row",
    }

    return (
        <Control width="600px" height="64px" className={`flex-row align-items-flex-center justify-content-flex-end flex-wrap ${props.className}`}>
            <ScrollSpy items={props.menu} offset={-64} style={Styles} currentClassName="bg-depth-5">
            {
                    props.menu.map((item, index) => {
                    return (
                        <SpyLink key={`web-link-${index}`} href={`#${item}`} />
                    )
                })
            }
            </ScrollSpy>
        </Control>
    )
}

export default WebNavigation