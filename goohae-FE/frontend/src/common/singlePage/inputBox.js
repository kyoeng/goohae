import React from 'react';
import styled from 'styled-components';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const InputWrapper = styled.div`
    & + & {
        margin-top: 8px;
    }
`;

const Label = styled.label`
    display:block;
    color: #1A1B23;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
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

// input만 이용시 label을 사용하지 않을 시 값을 'label=""' 를 입력하지 않아도 됩니다 
// 사용 : <InputBox label="라벨에 들어갈 내용" />
const InputBox = ({ label, ...rest }) => (
    <InputWrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </InputWrapper>
);

export default InputBox;