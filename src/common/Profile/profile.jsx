import styled from "styled-components";

import defaultUser from '../../media/defaulUser.jpg'

export const Container = styled.span`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 .1rem 0 ${({ theme }) => theme.text};
    border-radius: .5rem;
    width: ${({ width }) => width }rem;

    & > span {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({ theme }) => theme.text};
        font-size: 1rem;

        &:first-child {
            padding: .5rem;
            position: relative;
            height: 4rem;
            background: ${({ theme }) => theme.bg};
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            border-bottom: 1px solid ${({ theme }) => theme.tertiary};

            #boardImg {
                position: absolute;
                top: 2rem;
                height: 4rem;
                width: 4rem;
                border: 3px solid ${({ theme }) => theme.tertiary};
                border-radius: 50%;
                background-image: url(${(defaultUser)});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100% 100%;
            }
        }

        &:last-child {
            background: ${({ theme }) => theme.tertiary};
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
            padding-top: 2.5rem;
            gap: .5rem;

            .menuBars {
                padding-top: .5rem;
                display: flex;
                flex-direction: column;
                width: 100%;

                a {
                    font-size: 1rem;
                    padding: .5rem;
                    font-weight: 400;
                    display: flex;
                    gap: .5rem;
                    border-radius: 0;
                    color: ${({ theme }) => theme.text};

                    &:hover {
                        background: ${({ theme }) => theme.bg};
                    }
                }
            }

            .styleBars {
                font-size: 2rem;

                & > * {
                    cursor: pointer;
                }
            }

            & > *:last-child {
                font-size: 1rem;
                display: flex;
                justify-content: center;
                width: 100%;
                padding: .5rem;
                gap: .5rem;
                border-top: 1px solid ${({ theme }) => theme.bg};
                border-bottom-left-radius: .5rem;
                border-bottom-right-radius: .5rem;
            }
        }
    }
`