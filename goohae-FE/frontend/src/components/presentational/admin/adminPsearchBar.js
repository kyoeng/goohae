import pSearchBarStyled from '../../CSS/admin/adminPsearchBar.module.css';

export default function AdminPsearchBar() {
    return (
        <div className={pSearchBarStyled.pSearchContainer}>
            <div className={pSearchBarStyled.pinputWrap}>
                <label for='Psearching'>검색항목
                    <select id={pSearchBarStyled.pSearchOption}>
                        <option value="제품명" key="prodName">제품명</option>
                        <option value="카테고리" key="prodCate">카테고리</option>
                        <option value="제품ID" key="prodId">ID</option>
                    </select>
                    <input type="text" id={pSearchBarStyled.Psearching} placeholder='검색어를 입력하세요' />
                </label>
            </div>

        </div>

    );
}