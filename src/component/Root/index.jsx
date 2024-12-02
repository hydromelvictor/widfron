import React, { useContext, useState } from "react";
import { AppContext } from "../../context/Theme";

import Footer from "../../common/Footer";
import Header from "../../common/Header"
import Message from "../Message";

import { Container } from "./root";
import { UIColors } from "../../style/UIColors"


export default function Root({ Children }) {
    const { theme, toggleTheme } = useContext(AppContext)
    const [smsOn, setSmsOn] = useState(false)

    const smsToggle = () => {
        setSmsOn((e) => !e)
    }
    return (
        <Container>
            <Header theme={UIColors[theme]} toggleTheme={toggleTheme} smsToggle={smsToggle} />
            {Children}
            {
                smsOn && <span style={{
                    display: "flex",
                    position: "absolute",
                    bottom: '2.5rem',
                    right: '.5rem'
                }}><Message /></span>
            }
            <Footer theme={UIColors[theme]} />
        </Container>
    )
}
