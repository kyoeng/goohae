
import styled from 'styled-components';

export default function SubFormTitle ({title}) {
    return(
        <SubTitle>{title}</SubTitle>
    );
}

const SubTitle = styled.p`
    display: inline-block;
    width: 700px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 4rem;
    border-bottom: 2px solid black;
    box-sizing: border-box;
    padding: 0.5rem;
    color: #1A1B23;
`