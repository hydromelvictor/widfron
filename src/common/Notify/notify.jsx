import styled from "styled-components";

export const Container = styled.div`
    max-height: 80vh;
    width: ${({ width }) => width}rem;
    display: flex;
    flex-direction: column;
    border-radius: .2rem;
    overflow-y: auto;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 .1rem 0 ${({ theme }) => theme.text};
    padding: .5rem;
    gap: .5rem;

    & > span {
        height: 4rem;
        width: 100%;
        padding: .3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: .2rem;
        cursor: pointer;
        
        // &:nth-child(2n) {
        //     margin: .5rem 0;
        // }

        &.error {
            background: rgb(255, 105, 97, .3);
            color: rgb(255, 105, 97);
        }   

        &.warning {
            background: rgb(255, 179, 0, .3);
            color: rgb(255, 179, 0);
        }

        &.info {
            background: rgb(91, 192, 222, .3);
            color: rgb(91, 192, 222);
        }

        &.success {
            background: rgb(139, 195, 74, .3);
            color: rgb(139, 195, 74);
        }
        
        & > small {
            height: 2.5rem;
            width: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${({ theme }) => theme.bg};
            border-radius: 50%;
        }
        
        & > span {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: .5rem;

            & > small {
                color: ${({ theme }) => theme.primary};
                
                &:last-child {
                    font-size: .8rem;
                    align-self: end;
                }
                
                &.state {
                    font-weight: 600;
                }
            }
        }
    }
`;

/**
 * 
 * 
HEX	RGB
Rouge vif	#FF0000	rgb(255, 0, 0)
Rouge foncé	#B22222	rgb(178, 34, 34)
Rouge pastel	#FF6961	rgb(255, 105, 97)
Rouge orangé	#FF4500	rgb(255, 69, 0)

Nom	HEX	RGB
Vert classique	#28a745	rgb(40, 167, 69)
Vert pastel	#8BC34A	rgb(139, 195, 74)
Vert foncé	#1E7E34	rgb(30, 126, 52)
Vert clair	#A2D9B1	rgb(162, 217, 177)

Jaune vif	#FFC107	rgb(255, 193, 7)
Jaune foncé	#FFB300	rgb(255, 179, 0)
Jaune pastel	#FFF59D	rgb(255, 245, 157)
Orange-jaune	#FFA000	rgb(255, 160, 0)

Bleu clair	#17a2b8	rgb(23, 162, 184)
Bleu pastel	#5bc0de	rgb(91, 192, 222)
Bleu moyen	#007bff	rgb(0, 123, 255)
Bleu profond	#01579b	rgb(1, 87, 155)


 */


export const Span = ({ 
    level, 
    icon, 
    text = 'je suis une notification...', 
    date = '02-12-2024 15:22:24',
    state = 'state'
}) => {
    return (
        <span className={level}>
            <small>{icon}</small>
            <span>
                <small className={state}>{ text }</small>
                <small>{date}</small>
            </span>
        </span>
    )
}
