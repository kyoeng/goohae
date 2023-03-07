import React from 'react';
import styled from 'styled-components';
// import oc from 'open-color';
// import { shadow } from 'lib/styleUtils';
import { useDispatch } from 'react-redux';
import { findPassword } from '../../stores/store/slice/singlePage/findPwSlice';

const Button = styled.button`
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

// 사용 : <SingleButton children="버튼이름"/>


const SingleButton = ({ children, ...rest }) => {
    const dispatch = useDispatch();



    return (
        <Button {...rest}>
            {children}
        </Button>
    );
};

export default SingleButton;