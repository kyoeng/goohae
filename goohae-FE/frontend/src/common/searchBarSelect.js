import { useState } from 'react';
export default function SelectSearch({ selectOption }) {
    const [option, setOption] = useState(selectOption);

    return (
        <select>
            <option value='all' key="전체">전체</option>
            {option.map((item, idx) => {
                return (
                    <option value={option[idx]} key={option[idx]}>{option[idx]}</option>
                );
            })}
        </select>


    );
}

{/* <option value={selectOption[0]} key={selectOption[0]}>{selectOption[0]}</option> */ }
{/* <option value={selectOption[1]} key={selectOption[1]}>{selectOption[1]}</option> */ }
{/* <option value={selectOption[2]} key={selectOption[2]}>{selectOption[2]}</option> */ }