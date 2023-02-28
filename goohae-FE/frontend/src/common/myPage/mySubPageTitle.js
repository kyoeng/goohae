import React from 'react';
import styled from 'styled-components';

const MySubPageTitleBlock=styled.p`
line-height: 2.5rem;
font-weight: 800;
font-size: 2rem;
font-family:'Nanum Myeongjo';
text-align: center;
color: #1A1B23;
padding: 100px 0px 38px;
}
`;

const MyPsgeSubPageTitle = ({ myPsgeSubPageTitle}) => (
    <MySubPageTitleBlock>{myPsgeSubPageTitle}</MySubPageTitleBlock>
);

export default MyPsgeSubPageTitle;