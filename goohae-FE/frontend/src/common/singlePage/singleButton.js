import React from 'react';
import styled from 'styled-components';
// import oc from 'open-color';
// import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`

    display: block;
    width: 320px;
    height: 36px;
    line-height: 36px;
    text-align:center;
    margin: 10px auto 18px;
    border: 0;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    background:#9497AB;
    
    &:hover {
        background-color: #505DD0;
    }
`;

const SingleButton = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default SingleButton;