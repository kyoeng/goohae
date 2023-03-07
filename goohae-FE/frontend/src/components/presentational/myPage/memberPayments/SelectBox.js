import styled from "styled-components";

export default function SelectBox({options, directInput, memo1, memo2}) {
    return (
        <div>
            <Select style={{color:"black"}} onChange={ (e) => memo1.current = e.target.value}>
                {options.map((v,i) => {
                    return <option  key={`${v}_${i}`}>{v}</option>
                })}
            </Select>
                {!!directInput&&<DirectInput  placeholder={`${directInput}`} onChange={ e => memo2.current = e.target.value } />}
        </div>
    );
}

const DirectInput = styled.input`
    color: black;
    border : 1px solid black;
    width : 200px; 
    height : 40px; 
    margin-left:20px; 
`

const Select = styled.select`
    border : 1px solid black;
    width : 150px;
    height : 40px;
`