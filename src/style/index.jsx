import { createGlobalStyle } from 'styled-components';
import { useContext } from "react"
import { AppContext } from "../context/Theme"
import { UIColors } from './UIColors';



const StyledGlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};

        height: 100%;
        width: 100%;

        // scrollbar-width: thin;
        // scrollbar-color: transparent;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        color: white;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
    }
    button:hover {
        opacity: 0.9;
    }

    button.primary {
        background-color: ${({ theme }) => theme.primary};
    }

    button.secondary {
        background-color: ${({ theme }) => theme.secondary};
    }

    button.tertiary {
        background-color: ${({ theme }) => theme.tertiary};
    }
    
    a {
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
        color: ${({ theme }) => theme.secondary};
    }

    a.active {
        color: ${({ theme }) => theme.primary};
    }
    
    a.active, a:hover {
        color: ${({ theme }) => theme.primary };
    }

    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    body {
        
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        line-height: 1;
        color: ${({ theme }) => theme.text};
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.6rem;
    }

    h4 {
        font-size: 1.4rem;
    }

    h5, h6 {
        font-size: 1.2rem;
    }

    #appname {
            color: ${({ theme }) => theme.primary};
    }
    
    /* Pour Chrome, Safari, Edge */
    ::-webkit-scrollbar {
        width: .3rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent; 
        border-radius: 10px; 
        border: none; 
    }

    @media screen and (max-width: 600px) {

    }
`;


export default function GlobalStyle() {
    const { theme } = useContext(AppContext);
    return <StyledGlobalStyle theme={UIColors[theme]} />
}
