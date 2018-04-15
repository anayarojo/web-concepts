import React from "react"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Title from "../controls/title"
import {scrollToTop} from "../../utilities/windows-utility"
import * as utility from "../../utilities/windows-utility"

const Logo = (props) => {

    const Styles = {
        width: "210px",
        height: "64px",
    }

    return (
        <a href="/" style={Styles} onClick={(event) => { 
            event.preventDefault() 
            utility.scrollToTop()
        }}>
            <Control width="210px" height="64px" className="flex-row align-items-flex-center">
                <Image type="ball" depth={4} size={48} className="margin-right-xs" />
                <Title lenght="150px" depth={4} className="height-md" />
            </Control>
        </a>
    )
}

export default Logo