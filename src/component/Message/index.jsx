import React, { useContext } from "react";
import { AppContext } from "../../context/Theme";

import { UIColors } from "../../style/UIColors";
import { Container } from "./message";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";


export default function Message({ width }) {
    const { theme } = useContext(AppContext)

    return (
        <Container theme={UIColors[theme]} width={ width ? width : 45 }>
            <section>
                <h4>
                    <small>
                        <FontAwesomeIcon icon={faEnvelopesBulk} />
                        Messages
                    </small>
                    <small style={{
                        cursor: 'pointer',
                        padding: '.2rem'
                    }}><FontAwesomeIcon icon={faEllipsisVertical} /></small>
                </h4>
                <nav>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                    <Link to="#inbox" className="new" onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'flex';
                    }}>
                        <small></small>
                        <span>
                            <small>c'est la mon message pour toi</small>
                            <small>165</small>
                        </span>
                    </Link>
                </nav>
            </section>
            <div id="chating">
                <div>
                    <span>
                        <small></small>
                        <small>receiver</small>
                    </span>
                    <span onClick={() => {
                        const chat = document.getElementById('chating');
                        chat.style.display = chat.style.display === 'none' ? 'flex' : 'none';
                    }}><FontAwesomeIcon icon={faArrowRightLong} /></span>
                </div>
                <div></div>
            </div>
        </Container>
    )
}