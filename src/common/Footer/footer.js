import styled from "styled-components";

export const Container = styled.footer`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${({ theme }) => theme.bg};
    background: ${({ theme }) => theme.primary};
    position: fixed;
    bottom: 0;
`;