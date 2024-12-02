import styled from "styled-components";
import defaultUser from '../../media/defaulUser.jpg'


export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 0 .5rem 0 0;
    box-shadow: 0 0 .5rem 0 ${({ theme }) => theme.tertiary};
    background: ${({ theme }) => theme.bg};

    & > * {
        display: flex;
        align-items: center;

        &:last-child {
            gap: 1rem;
            position: relative;

            #notify, #profileBoard {
                position: absolute;
                top: 3.6rem;
                right: .5rem;
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
                padding: .5rem;
            }

            a {
                display: flex;
                padding: .3rem 1rem;
                border-radius: .2rem;
                font-size: .8rem;
                background: ${({ theme }) => theme.tertiary};
            }

            & > span {
                display: flex;
                gap: 1rem;
    
                & > span {
                    font-size: 1.4rem;
                    color: ${({ theme }) => theme.tertiary};
                    position: relative;
                    display: flex;
                    cursor: pointer;

                    &:hover {
                        color: ${({ theme }) => theme.secondary};
                    }

                    & > sub {
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
            }
        }
    }
`;