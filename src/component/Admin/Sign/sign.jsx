import styled from 'styled-components';



export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    
    form {
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 1rem 0 ${({ theme }) => theme.tertiary};
        border-radius: .5rem;
        padding: 1rem;
        gap: .5rem;
        min-width: 300px;
        margin-top: 2rem;
        
        span {
            display: flex;
            flex-direction: column;
            gap: .7rem;

            &:last-child {
                flex-direction: row;
                justify-content: space-between;
                padding: .5rem 0;
            }

            small {
                display: flex;
                flex-direction: column;

                label {
                    font-weight: 600;
                }
                
                input {
                    height: 2.3rem;
                    padding: .2rem .5rem;
                    border-radius: .3rem;
                    outline: none;
                    border: 1px solid ${({ theme }) => theme.tertiary};
                }
            }
        }
    }
`;
