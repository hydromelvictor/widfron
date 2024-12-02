import React, { useContext } from "react";
import { AppContext } from "../../context/Theme";

import { Container } from "./home";
import { UIColors } from "../../style/UIColors"
import Root from "../Root";


export default function Home() {
    const { theme } = useContext(AppContext)
    return (
        <Root>
            <Container theme={UIColors[theme]}>
            </Container>
        </Root>
    )
}
