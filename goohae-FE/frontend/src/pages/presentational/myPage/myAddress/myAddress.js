import { useState } from "react";

import "../../../css/myPage/myAddress/myAddress.css";
import AddAddress from "./addAddress";
import AppLayout from './../../../../common/layout/AppLayout';

import MyPageSubPageCategory from '../../../../common/myPage/category';
import MyPsgeSubPageTitle from '../../../../common/myPage/mySubPageTitle';

export default function MyAddress() {
    const [addAddress, setAddAddress] = useState(false);

    // let checkbox = document.querySelectorAll('.checkbox');
    // function allselect(allselect) {
    //     for (let i = 0; i < checkbox.length; i++) {
    //         checkbox[i].checked = allselect;
    //     }
    // }


    // let wlpdName = document.querySelector('.wlpdName'),
    //     p = document.querySelectorAll('.nmP');

    // let del = document.querySelector('.del');

    // del.addEventListener('mouseup', function () {
    //     for (let i = 0; i < checkbox.length; i++) {
    //         if (checkbox[i].checked) {
    //             checkbox[i].parentElement.parentElement.remove();
    //         }
    //     }
    // })


    // let span = document.querySelectorAll('span');
    // console.log(span);


    // let addFillIn = document.querySelector('.addFillIn');
    // console.log(location.href);
    // // 현재 페이지에 로드1
    // addFillIn.addEventListener('click', () => {
    //     open('./addAddress.html');

    // });

    return (
        <AppLayout>
            <div className="myAddressMain">
                <section className="myAddressWrap">
                    <MyPageSubPageCategory myPageSubLink="myAddress" myPageSubLinkKr="내 주소록"/>
                    <MyPsgeSubPageTitle myPsgeSubPageTitle="내 주소록"/>
                    <article className="addressTableWrap">
                        <table className="addressTable">
                            <colgroup>
                                <col width="50px" />
                                <col width="100px" />
                                <col width="100px" />
                                <col width="300px" />
                                <col width="100px" />
                                <col width="100px" />
                                <col width="100px" />
                                <col width="70px" />
                            </colgroup>
                            <thead id="myAddressTableHead">
                                <tr className="myAddressTableHeadLine">
                                    <th scope="col" className="addressTableTh">
                                        <input type="checkbox" name="allChk" onclick="allselect(this.checked)" />
                                    </th>
                                    <th scope="col" className="addressTableTh">주소록 고정</th>
                                    <th scope="col" className="addressTableTh">배송지명</th>
                                    <th scope="col" className="addressTableTh">주소</th>
                                    <th scope="col" className="addressTableTh">수령인</th>
                                    <th scope="col" className="addressTableTh">일반전화</th>
                                    <th scope="col" className="addressTableTh">휴대전화</th>
                                    <th scope="col" className="addressTableTh">수정</th>
                                </tr>
                            </thead>
                            <tbody id="myAddressTableBody">
                                <tr className="myAddressTableBodyLine">
                                    <td className="myAddressTableRow">
                                        <input type="checkbox" className="checkbox" />
                                    </td>
                                    <td className="myAddressTableRow">
                                        기본
                                    </td>
                                    <td className="myAddressTableRow">
                                        집{ }
                                    </td>
                                    <td className="myAddressTableRow">
                                        중원구 하대원동 성원초원 아파트 103동 1107호{ }
                                    </td>
                                    <td className="myAddressTableRow">
                                        유정현{ }
                                    </td>
                                    <td className="myAddressTableRow">
                                        010-5421-5350{ }
                                    </td>
                                    <td className="myAddressTableRow">
                                        010-5421-5350{ }
                                    </td>
                                    <td className="myAddressTableRow">
                                        <button type="button" className="myAddressCorrection cursor">수정</button>
                                    </td>
                                </tr>
                                <tr className="myAddressTableBodyLine">
                                    <td className="myAddressTableRow">
                                        <input type="checkbox" className="checkbox" />
                                    </td>
                                    <td className="myAddressTableRow">
                                        <a href="#">-</a>
                                    </td>
                                    <td className="myAddressTableRow">
                                        집
                                    </td>
                                    <td className="myAddressTableRow">
                                        Google Inc.
                                        1600 Amphitheatre Parkway
                                        Mountain View, CA 94043
                                        USA
                                    </td>
                                    <td className="myAddressTableRow">
                                        유정현
                                    </td>
                                    <td className="myAddressTableRow">
                                        010-5421-5350
                                    </td>
                                    <td className="myAddressTableRow">
                                        010-5421-5350
                                    </td>
                                    <td className="myAddressTableRow">
                                        <button type="button" className="myAddressCorrection cursor" >수정</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <div className="addressControlButtonWrap">
                        <button type="reset" className="myAddressButton" id="myAddressDeleteButton" disabled>선택 주소록 삭제</button>
                        <button type="button" className="myAddressButton cursor" id="myAddressInputButton" onClick={() => setAddAddress(true)}>배송지 등록</button>
                        {/* {addAddress===true? <AddAddress/>:null} */}
                        {addAddress ? <AddAddress onClose={setAddAddress} /> : null}
                    </div>
                    <div className="AddressCaution">
                        <span className="myAddressNoticeTitle"><strong className="myAddressNoticeTitleStrong">배송주소록 유의사항</strong></span>
                        <ul className="myAddressNotics">
                            <li className="myAddressNoticeList"><strong className="myAddressNoticeListStrong">1.&nbsp;</strong>배송 주소록은 최대 10개까지 등록할 수 있으며, 별도로 등록하지 않을 경우 최근 배송 주소록 기준으로 자동 업데이트 됩니다.
                            </li>
                            <li className="myAddressNoticeList"><strong className="myAddressNoticeListStrong">2.&nbsp;</strong>자동 업데이트를 원하지 않을 경우 주소록 고정 선택을 선택하시면 선택된 주소록은 업데이트 대상에서 제외됩니다.</li>
                            <li className="myAddressNoticeList"><strong className="myAddressNoticeListStrong">3.&nbsp;</strong>기본 배송지는 1개만 저장됩니다. 다른 배송지를 기본 배송지로 설정하시면 기본 배송지가 변경됩니다.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}