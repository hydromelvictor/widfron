import styled from "styled-components";
import defaultUser from '../../../media/defaulUser.jpg'

export const Container = styled.div`
    flex: 1;
    display: flex;
    width: 100%;

    #navigation {
        width: 100%;
        height: 2.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 1rem 0 ${({ theme }) => theme.tertiary};

        span {
            display: flex;
            align-items: center;

            #toggleNav {
                padding: 0 .5rem;
                color: ${({ theme }) => theme.primary};
                cursor: pointer;
            }

            &:last-child {
                gap: 1rem;
                padding: 0 .5rem;
                small {
                    font-size: 1.4rem;
                    color: ${({ theme }) => theme.tertiary};
                    position: relative;
                    display: flex;
                    cursor: pointer;

                    &:hover {
                        color: ${({ theme }) => theme.secondary};
                    }

                    sub {
                        position: absolute;
                        bottom: 0;
                        right: -.2rem;
                        display: flex;
                        background: ${({ theme }) => theme.tertiary};
                        height: .8rem;
                        width: .8rem;
                        border-radius: 50%;
                        border: 2px solid ${({ theme }) => theme.bg};
                        &.new {
                            background: ${({ theme }) => theme.secondary};
                        }
                    }
                }

                #profileImg {
                    height: 2rem;
                    width: 2rem;
                    border: 3px solid ${({ theme }) => theme.tertiary};
                    border-radius: 50%;
                    background-image: url(${(defaultUser)});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 100% 100%;
                }

                #profile {
                    color: ${({ theme }) => theme.text};
                    font-size: .8rem;
                    cursor: pointer;
                    display: flex;
                    gap: .2rem;
                    align-items: center;
                }
            }
        }
    }

    section {
        z-index: 1000;
        display: flex;
        flex-direction: column;
        background: ${({ theme }) => theme.text};
        width: 10rem;
        gap: 1rem;
        font-size: .8rem;

        & > span {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.bg};
            font-weight: 700;
            font-size: .9rem;
            padding: .5rem 0;
        }

        & > nav {
            width: 100%;
            display: flex;
            flex-direction: column;

            & > * {
                padding: .5rem;
                color: ${({ theme }) => theme.tertiary};
                font-weight: 400;
            }

            a {
                display: flex;
                align-items: center;
                width:100%;
                gap: 1rem;
                padding: .6rem;

                &:hover {
                    color: ${({ theme }) => theme.bg};
                    font-weight: 600;
                }
            }

            a.active {
                color: ${({ theme }) => theme.bg};
                font-weight: 600;
            }
        }
    }

    nav {
        position: relative;
        

        #logout {
            position: absolute;
            bottom: 0;
            align-items: center;
            display: flex;
            width:100%;
            gap: 1rem;
            padding: .5rem;
        }
    }
    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        .corp {
            flex: 1;
        }
    }
`;