import React, { useContext } from "react";
import { AppContext } from "../../context/Theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faInfo, faSkullCrossbones, faWarning } from "@fortawesome/free-solid-svg-icons";

import { Container, Span } from "./notify";
import { UIColors } from "../../style/UIColors";

export default function Notify({ width }) {
    const { theme } = useContext(AppContext)
    return (
        <Container theme={UIColors[theme]} width={ width ? width : 20 }>
            <Span 
                level="error"
                icon={<FontAwesomeIcon icon={faSkullCrossbones} />}
            />
            <Span 
                level="warning"
                icon={<FontAwesomeIcon icon={faWarning} />}
            />
            <Span 
                level="info"
                icon={<FontAwesomeIcon icon={faInfo} />}
            />
            <Span 
                level="success"
                icon={<FontAwesomeIcon icon={faCheckDouble} />}
            />
        </Container>
    )
}