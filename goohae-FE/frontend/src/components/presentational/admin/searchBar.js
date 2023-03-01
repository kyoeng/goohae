import SelectSearch from '../../../common/searchBarSelect';
import SearchBarStyled from '../../CSS/admin/searchBar.module.css';

export default function SearchBar({ options }) {
    return (
        <div className={SearchBarStyled.searchBarContainer}>
            <SelectSearch selectOption={options} />

            <input
                type="text"
                placeholder='검색어를 입력하세요' />

            <button>검색</button>
        </div>
    );
}