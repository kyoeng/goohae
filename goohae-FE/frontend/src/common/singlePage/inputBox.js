import React from 'react';
import styled from 'styled-components';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const InputWrapper = styled.div`
    & + & {
        margin-top: 8px;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    padding: 10px 0px;
    border: 1px solid #1A1B23;
    border-radius: 0px;
    width: 320px;
    height: 36px;
    outline: none;
    line-height: 36px;
    font-size: 1.4rem;
    outline-style: none; 
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputBox = ({ label, ...rest }) => (
    <InputWrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </InputWrapper>
);

export default InputBox;