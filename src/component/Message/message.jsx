import styled from "styled-components";

import defaultUser from '../../media/defaulUser.jpg'

export const Container = styled.div`
    display: flex;
    height: 83vh;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 .1rem 0 ${({ theme }) => theme.text};
    border-radius: .3rem;

    & > section {
        width: 16rem;
        display: flex;
        flex-direction: column;

        & > h4 {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid ${({ theme }) => theme.tertiary};

            & > small {
                display: flex;
                gap: .5rem;
            }
        }

        & > nav {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow-y: auto;

            & > a {
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .5rem;
                color: ${({ theme }) => theme.text};

                &:hover {
                    background: ${({ theme }) => theme.tertiary};
                    
                    & > small {
                        border-color: ${({ theme }) => theme.bg};
                    }

                    & > span {
                        & > small:last-child {
                            background: ${({ theme }) => theme.bg};
                        }
                    }
                }

                &:nth-child(2n) {
                    border-top: 1px solid ${({ theme }) => theme.tertiary};
                    border-bottom: 1px solid ${({ theme }) => theme.tertiary};
                }
                
                & > small {
                    height: 2.5rem;
                    width: 2.5rem;
                    border: 3px solid ${({ theme }) => theme.tertiary};
                    border-radius: 50%;
                    background-image: url(${(defaultUser)});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 100% 100%;
                }

                & > span {
                    flex: 1;
                    font-size: .8rem;
                    display: flex;
                    align-items: center;
                    gap: .5rem;

                    & > small {

                        &:first-child {
                            flex: 1;
                        }
                        
                        &:last-child {
                            height: 1.5rem;
                            min-width: 1.5rem;
                            border-radius: 50%;
                            background: ${({ theme }) => theme.tertiary};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }

    & > div {
        width: calc(${({ width }) => width}rem - 16rem);
        border-left: 1px solid ${({ theme }) => theme.tertiary};
        display: flex;
        flex-direction: column;
        
        & > div {
            &:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .5rem;
                border-bottom: 1px solid ${({ theme }) => theme.tertiary};

                & > span {
                    &:first-child {
                        display: flex;
                        align-items: center;
                        gap: .5rem;

                        & > small {
                            &:first-child {
                                height: 2.75rem;
                                width: 2.75rem;
                                border: 3px solid ${({ theme }) => theme.tertiary};
                                border-radius: 50%;
                                background-image: url(${(defaultUser)});
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: 100% 100%;
                            }
                        }
                    }

                    &: last-child {
                        height: 2rem;
                        width: 2rem;
                        background: ${({ theme }) => theme.tertiary};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;
