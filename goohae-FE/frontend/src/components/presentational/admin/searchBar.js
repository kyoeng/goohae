import adminUsearchBar from '../../CSS/admin/searchBar.module.css';

export default function SearchBar() {
    return (
        <div className={adminUsearchBar.searchBarContainer}>
            <select id={adminUsearchBar.userSearchCategory} name="adminSelectBox">
                <option value="카테고리" key="전체">카테고리</option>
                <option value="회원아이디" key="아이디">회원아이디</option>
                <option value="회원명" key="회원명">회원명</option>
                <option value="회원상태" key="회원상태">회원상태</option>
            </select>

            <input id={adminUsearchBar.userSearchBar} type="text" placeholder='검색어를 입력하세요' />

            <button>검색</button>
        </div>
    );
}