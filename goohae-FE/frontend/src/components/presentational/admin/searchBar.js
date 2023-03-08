import { useDispatch } from 'react-redux';

import SelectSearch from '../../../common/searchBarSelect';
import SearchBarStyled from '../../CSS/admin/searchBar.module.css';

export default function SearchBar({ options }) {
    const searchKeyword = useDispatch();

    const searchProdKeyword = (e)=>{
        
    }

    return (
        <div className={SearchBarStyled.searchBarContainer}>
            <SelectSearch selectOption={options} />

            <input
                type="text"
                placeholder='검색어를 입력하세요'
                onChange={searchProdKeyword} />

            <button>검색</button>
        </div>
    );
}