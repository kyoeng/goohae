import { Link } from 'react-router-dom';
import '../../css/memberPayment/memberPayment.css';

export default function MemberPayMent(){
// const main = document.querySelector("main"),
//   requiredInputTagWrap = main.querySelectorAll(".memPayOrderInfo"), // 필수정보 입력 묶음
//   [
//     memPayOrderName,
//     firstPhoneNum,
//     secondPhoneNum,
//     thirdPhoneNum,
//     postNum,
//     basicAddress,
//     detailedAddress,
//   ] = main.querySelectorAll(".memPayOrderInfo input"),
//   fixedPayment = main.querySelector(".MemberPayMentFinPrice"), //최종결제금액창
//   [totalAgree, paymentAgree1, paymentAgree2, paymentAgree3] =
//     fixedPayment.querySelectorAll("input[type = checkbox]"),
//   [
//     totalAgreeCheckBox,
//     paymentAgree1CheckBox,
//     paymentAgree2CheckBox,
//     paymentAgree3CheckBox,
//   ] = fixedPayment.querySelectorAll("label > img"),
//   paymentOrderBtn = fixedPayment.querySelector(".PaymentOrderBtn"),
//   MemOrderPostMemoWrap = main.querySelector(".postMemoInput"), // 배송메모
//   [postMemoSelect, postMemoInput] =
//     MemOrderPostMemoWrap.querySelectorAll(".postMemo"),
//   postMemoOption = postMemoSelect.querySelectorAll("option"),
//   memPayOrderMeth = main.querySelector(".MemPayOrderPayMethBtn"),
//   [cardBtn, accountBtn, mobileBtn, kakaoPayBtn] =
//     memPayOrderMeth.querySelectorAll(".MemPayOrderPayMethBtn>label"),
//   payBoxWrap = main.querySelector(".payBoxWrap"),
//   [MemPayOrderCardPaymentBox, accountDepositeBox, mobilePayBox, kakaoPayBox] =
//     payBoxWrap.querySelectorAll(".payBoxWrap>div");

// cardBtn.style.border = "1px solid var(--PurpleBlue)";
// cardBtn.lastElementChild.style.color = "var(--PurpleBlue";
// cardBtn.children[0].style.filter =
//   "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";

// console.log(paymentOrderBtn);
// console.log(paymentAgree1CheckBox);
// console.log(paymentAgree2CheckBox);
// console.log(paymentAgree3CheckBox);

// let flag = false;

// function isCorrect(asValue) {
//   //한글 영문
//   const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
//   return regExp.test(asValue);
// }

// totalAgree.addEventListener("change", function () {
//   if (totalAgree.checked == true) {
//     paymentAgree1.checked = true;
//     paymentAgree2.checked = true;
//     paymentAgree3.checked = true;
//     totalAgreeCheckBox.setAttribute("src", "./checked.png");
//     paymentAgree1CheckBox.setAttribute("src", "./checked.png");
//     paymentAgree2CheckBox.setAttribute("src", "./checked.png");
//     paymentAgree3CheckBox.setAttribute("src", "./checked.png");
//   } else {
//     paymentAgree1.checked = false;
//     paymentAgree2.checked = false;
//     paymentAgree3.checked = false;
//     totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
//   }
// });

// paymentAgree1.addEventListener("change", function (e) {
//   if (e.target.checked == false) {
//     totalAgree.checked = false;
//     totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
//   } else {
//     paymentAgree1.checked = true;
//     paymentAgree1CheckBox.setAttribute("src", "./checked.png");
//   }
// });

// paymentAgree2.addEventListener("change", function (e) {
//   if (e.target.checked == false) {
//     totalAgree.checked = false;
//     totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
//   } else {
//     paymentAgree2.checked = true;
//     paymentAgree2CheckBox.setAttribute("src", "./checked.png");
//   }
// });

// paymentAgree3.addEventListener("change", function (e) {
//   if (e.target.checked == false) {
//     totalAgree.checked = false;
//     totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
//     paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
//   } else {
//     paymentAgree3.checked = true;
//     paymentAgree3CheckBox.setAttribute("src", "./checked.png");
//   }
// });

// fixedPayment.addEventListener("change", function () {
//   if (
//     paymentAgree1.checked == true &&
//     paymentAgree2.checked == true &&
//     paymentAgree3.checked == true
//   ) {
//     totalAgree.checked = true;
//     totalAgreeCheckBox.setAttribute("src", "./checked.png");
//     paymentOrderBtn.classList.remove("btnDisable");
//   } else {
//     totalAgree.checked = false;
//     totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
//     paymentOrderBtn.classList.add("btnDisable");
//   }
// });

// postMemoSelect.addEventListener("change", function () {
//   postMemoInput.value = postMemoOption[postMemoSelect.value - 1].innerHTML;
// });

// let beforePaymentMethBox = MemPayOrderCardPaymentBox,
//   beforePaymentMethBtnOj = cardBtn;

// memPayOrderMeth.addEventListener("click", function (e) {
//   const eventOj = e.target.closest("label"); // 잘 나옴,
//   if (beforePaymentMethBtnOj != eventOj) {
//     if (eventOj.className == "cardPayBtn") {
//       MemPayOrderCardPaymentBox.classList.remove("displayNone");
//       MemPayOrderCardPaymentBox.classList.add("displayFlex");
//       beforePaymentMethBox.classList.remove("displayFlex");
//       beforePaymentMethBox.classList.add("displayNone");
//       beforePaymentMethBtnOj.children[0].style.filter =
//         "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
//       eventOj.children[0].style.filter =
//         "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
//       eventOj.style.border = "1px solid var(--PurpleBlue)";
//       eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
//       beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
//       beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
//       beforePaymentMethBox = MemPayOrderCardPaymentBox;
//       beforePaymentMethBtnOj = eventOj;
//     }
//     if (eventOj.className == "accountPayBtn") {
//       accountDepositeBox.classList.remove("displayNone");
//       accountDepositeBox.classList.add("displayFlex");
//       beforePaymentMethBox.classList.remove("displayFlex");
//       beforePaymentMethBox.classList.add("displayNone");
//       beforePaymentMethBtnOj.children[0].style.filter =
//         "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
//       eventOj.children[0].style.filter =
//         "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
//       eventOj.style.border = "1px solid var(--PurpleBlue)";
//       eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
//       beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
//       beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
//       beforePaymentMethBox = accountDepositeBox;
//       beforePaymentMethBtnOj = eventOj;
//     }
//     if (eventOj.className == "mobilePayBtn") {
//       mobilePayBox.classList.remove("displayNone");
//       mobilePayBox.classList.add("displayFlex");
//       beforePaymentMethBox.classList.remove("displayFlex");
//       beforePaymentMethBox.classList.add("displayNone");
//       beforePaymentMethBtnOj.children[0].style.filter =
//         "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
//       eventOj.children[0].style.filter =
//         "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
//       eventOj.style.border = "1px solid var(--PurpleBlue)";
//       eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
//       beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
//       beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
//       beforePaymentMethBox = mobilePayBox;
//       beforePaymentMethBtnOj = eventOj;
//     }
//     if (eventOj.className == "kakaoPayBtn") {
//       kakaoPayBox.classList.remove("displayNone");
//       kakaoPayBox.classList.add("displayFlex");
//       beforePaymentMethBox.classList.remove("displayFlex");
//       beforePaymentMethBox.classList.add("displayNone");
//       beforePaymentMethBtnOj.children[0].style.filter =
//         "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
//       eventOj.children[0].style.filter =
//         "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
//       eventOj.style.border = "1px solid var(--PurpleBlue)";
//       eventOj.lastElementChild.style.color = "var(--PurpleBlue)";
//       beforePaymentMethBtnOj.style.border = "1px solid var(--DarkGray)";
//       beforePaymentMethBtnOj.lastElementChild.style.color = "var(--DarkGray)";
//       beforePaymentMethBox = kakaoPayBox;
//       beforePaymentMethBtnOj = eventOj;
//     }
//   }
// });

// const cardPaymentSelect = payBoxWrap.querySelector(".cardPaymentSelect"),
//   cardPaymentHalbuOption = payBoxWrap.querySelector(".halbuMonth");

// cardPaymentSelect.addEventListener("change", function (e) {
//   cardPaymentHalbuOption.disabled = false;
// });

// const cashBillWrap = payBoxWrap.querySelector(".cashBillInputWrap"),
//   cashBillTypeWrap = cashBillWrap.querySelector(".cashBillTypeWrap"),
//   [cashBillTypeIncome, cashBillTypeProve, cashBillTypeNo] =
//     cashBillWrap.querySelectorAll(".cashBillTypeWrap>span"),
//   cashBillTypeIncomeNum = cashBillWrap.querySelector(".cashBillTypeIncomeNum"),
//   cashBillTypeProveNumWrap = cashBillWrap.querySelector(
//     ".cashBillTypeProveNumwrap"
//   );

// let beforeBillTypeBtn = cashBillTypeIncome;

// cashBillTypeWrap.addEventListener("click", function (e) {
//   if (e.target != beforeBillTypeBtn) {
//     switch (e.target.className) {
//       case "cashBillTypeIncome":
//         e.target.style.border = "1px solid var(--PurpleBlue)";
//         e.target.style.backgroundColor = "white";
//         e.target.style.color = "var(--PurpleBlue)";
//         beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
//         beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
//         beforeBillTypeBtn.style.color = "var(--DarkGray)";
//         cashBillTypeProveNumWrap.classList.remove("displayBlock");
//         cashBillTypeProveNumWrap.classList.add("displayNone");
//         cashBillTypeIncomeNum.classList.remove("displayNone");
//         cashBillTypeIncomeNum.classList.add("displayBlock");
//         beforeBillTypeBtn = e.target;
//         break;

//       case "cashBillTypeProve":
//         e.target.style.border = "1px solid var(--PurpleBlue)";
//         e.target.style.backgroundColor = "white";
//         e.target.style.color = "var(--PurpleBlue)";
//         beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
//         beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
//         beforeBillTypeBtn.style.color = "var(--DarkGray)";
//         cashBillTypeProveNumWrap.classList.remove("displayNone");
//         cashBillTypeProveNumWrap.classList.add("displayBlock");
//         cashBillTypeIncomeNum.classList.remove("displayBlock");
//         cashBillTypeIncomeNum.classList.add("displayNone");
//         beforeBillTypeBtn = e.target;
//         break;

//       case "cashBillTypeNo":
//         e.target.style.border = "1px solid var(--PurpleBlue)";
//         e.target.style.backgroundColor = "white";
//         e.target.style.color = "var(--PurpleBlue)";
//         beforeBillTypeBtn.style.backgroundColor = "var(--LightGray)";
//         beforeBillTypeBtn.style.border = "1px solid var(--DarkGray)";
//         beforeBillTypeBtn.style.color = "var(--DarkGray)";
//         cashBillTypeProveNumWrap.classList.remove("displayBlock");
//         cashBillTypeProveNumWrap.classList.add("displayNone");
//         cashBillTypeIncomeNum.classList.remove("displayBlock");
//         cashBillTypeIncomeNum.classList.add("displayNone");
//         beforeBillTypeBtn = e.target;
//         break;

//       default:
//         break;
//     }
//   }
// });

// const MemPayOrderMileageWrap = main.querySelector(".MemPayOrderMileageWrap"),
//   [mileageUseInput, useAllMileage] = MemPayOrderMileageWrap.querySelectorAll(
//     ".MemPayOrderMileageWrap input"
//   ),
//   couponUseSelect = MemPayOrderMileageWrap.querySelector(
//     ".MemPayOrderMileageWrap select"
//   ),
//   couponUseOPtion = couponUseSelect.querySelectorAll("option"),
//   myMileage = MemPayOrderMileageWrap.querySelector(
//     ".MemPayOrderUserMileageWrap strong"
//   );

// const MemPayDiscountPrice = fixedPayment.querySelector(
//     ".MemPayDiscountPriceWrap strong"
//   ),
//   MemPayProductPrice = fixedPayment.querySelector(
//     ".MemPayProductPriceWrap strong"
//   ),
//   deliveryFee = fixedPayment.querySelector(
//     ".MemPayDelieveryFeeWrapWrap strong"
//   ),
//   finPrice = fixedPayment.querySelector(".MemPayTotalPriceWrap strong");

// makeFinalPrice();

// couponUseSelect.addEventListener("change", function (e) {
//   if (e.target.value == 0) {
//     MemPayDiscountPrice.innerHTML = 0;
//     return makeFinalPrice();
//   }

//   const coupon = `${couponUseOPtion[e.target.value].innerHTML}`;

//   makeDiscountPrince(MemPayProductPrice.innerHTML, coupon);
//   makeFinalPrice();
// });

// // ==========최종 결제금액 란==========

// const allInput = requiredInputTagWrap.querySelectorAll("input");

// function makeDiscountPrince(fixedPrice, coupon) {
//   const calPercentIndex = +coupon.indexOf("%"),
//     discountPercent = +coupon.slice(calPercentIndex - 3, calPercentIndex);

//   for (let i = 0; i < fixedPrice.length / 3; i++) {
//     fixedPrice = fixedPrice.replace(",", "");
//   }

//   MemPayDiscountPrice.innerHTML = (
//     (+fixedPrice * +discountPercent) /
//     100
//   ).toLocaleString();
// }

// function makeFinalPrice() {
//   finPrice.innerHTML = (
//     makePriceToNum(MemPayProductPrice.innerHTML) +
//     makePriceToNum(deliveryFee.innerHTML) -
//     makePriceToNum(MemPayDiscountPrice.innerHTML)
//   ).toLocaleString();
// }

// function makePriceToNum(price) {
//   for (let i = 0; i < price.length / 3; i++) {
//     price = price.replace(",", "");
//   }
//   return +price;
// }
return (

  <div className="memPayOrderMain">
    <div className="memPayOrderSection">
      <p className="paymentTitle">주문/결제</p>
      <article className="memberPaymentWrap">
        <div className="paymentForm">
          <div className="memPayOrderInfo">
            <p className="memPayOrderSubtitle">배송지 정보</p>
            <div className="memPayOrderBox">
              <label htmlFor="MemPayOrderName" className="memPayLabel">받는 사람</label>
              <input className="memPayInput MemPayOrderName" name="MemPayOrderName" id="MemPayOrderName" type="text" placeholder="이름을 입력하세요." />
            </div>
            <div className="memPayOrderBox">
              <label className="memPayLabel">휴대폰번호</label>
              <input className=" memPayInput firstPhoneNum" name="firstPhoneNum" type="text" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" minLength={2} maxLength={3} />-
              <input className=" memPayInput secondPhoneNum" name="secondPhoneNum" type="text" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" minLength={4} maxLength={4} required />-
              <input className=" memPayInput thirdPhoneNum" name="thirdPhoneNum" type="text" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" minLength={4} maxLength={4} required />
            </div>
            <div className="MemPayOrderAddressInputWrap memPayOrderBox">
              <label className="memPayLabel">주소</label>
              <div className="AddressInput">
                <div><input className="memPayInput PostNum" type="text" name="PostNum" required /><a href="#">우편번호 찾기</a>
                </div>
                <div><input className="memPayInput BasicAddress" type="text" name="BasicAddress" required /><span>기본 주소를
                    입력해주세요.</span></div>
                <div><input className="memPayInput DetailedAddress" type="text" name="DetailedAddress" required /><span>상세
                    주소를 입력해주세요.</span>
                </div>
              </div>
            </div>
            <div className="memPayOrderBox postMemoInput">
              <label htmlFor="MemOrderPostMemo" className="memPayLabel">배송 메모</label>
              <select className=".memPaySel postMemo" name="MemOrderPostMemo" id="memOrderPostMemo">
                <option value={1}>배송메모를 선택하세요.</option>
                <option value={2}>부재시 경비실에 맡겨주세요.</option>
                <option value={3}>빠른 배송 부탁드려요.</option>
                <option value={4}>부재시 연락 바랍니다.</option>
                <option value={5}>배송전 연락 바랍니다.</option>
                <option value={6}>직접 입력하기(20자 이내)</option>
              </select>
              <input className="memPayInput postMemo" placeholder="직접입력" type="text" name="MemOrderPostMemo" id="MemOrderPostMemo" />
            </div>
            <div>
            </div>
          </div>
          <div className="memPayOrderProductInfo">
            <p className="memPayOrderSubtitle">상품정보</p>
            <div  className="memPayOrderProductBoxWrap">
              <img className="memPayOrderProductImg" src="../images/icon/HunkerBed1-1.jpg" alt="구매 상품 이미지" />
              <div className="memPayOrderProductInfo">
                <p className="MemPayOrderProductName">GooHae특별 상품</p>
                <p>
                  <span className="MemPayOrderProductOption">옵션</span>
                  <span> 색상, 사이즈 </span>
                </p>
              </div>
              <p className="MemPayOrderProductQuantity">2개</p>
              <p className="MemPayOrderProductPrice">
                <span className="SmallGuide">상품가격</span>
                <span>1,115,000</span>
              </p>
              <p>
                <span className="SmallGuide">배송료</span>
                <span>25,000</span>
              </p>
            </div>
          </div>
          <div className="MemPayOrderMileageWrap">
            <p className="memPayOrderSubtitle">쿠폰 사용</p>
            {/* <div class="MemPayOrderMileage">
                        <div class="MemPayOrderUserMileageWrap">
                            <span>보유 적립금&nbsp;</span>
                            <strong>0</strong>
                            <span>원</span>
                        </div>
                        <div class="MemPayOrderMileageUseInputWrap">
                            <div class="MemPayOrderMileageUseInput">
                                <input type="number" placeholder="0원">
                                <button>적용</button>
                                <span>사용하실 적립금 입력 후 '적용'버튼을 눌러주세요.</span>
                            </div>
                            <div>
                                <input name="AlliMileageUse" type="checkbox" id="useAllCredit">
                                <label for="useAllCredit"><span class="radioImg">라디오버튼</span></label>
                                <span>모두사용</span>
                            </div>
                        </div>
                    </div> */}
            <div className="MemPayOrderCoupon">
              <div className="MemPayOrderUserCouponWrap">
                <span>보유 쿠폰&nbsp;</span>
              </div>
              <div className="MemPayOrderCouponUseInputWrap">
                <select name="MemPayOrderProductCoupon" id="MemPayOrderProductCoupon">
                  <option value={0}>쿠폰을 골라주세요.</option>
                  <option value={1}>프로젝트 끝 할인쿠폰 40%</option>
                  <option value={2}>JS 환영 쿠폰 25%</option>
                </select>
              </div>
            </div>
          </div>
          <div className="MemPayOrderPayMeth">
            <p className="memPayOrderSubtitle">결제수단</p>
            <div className="MemPayOrderPayMethBtn">
              <label className="memPayLabel cardPayBtn" htmlFor="card">
                <img src="../images/credit-cards.png" alt="card" />
                <span>신용/체크 카드</span>
              </label>
              <label className="memPayLabel accountPayBtn" htmlFor="account">
                <img src="../images/transaction.png" alt="account" />
                <span>무통장 입금</span>
              </label>
              <label className="memPayLabel mobilePayBtn" htmlFor="mobilePay">
                <img src="../images/smartphone-call.png" alt="mobilePay" />
                <span>핸드폰 결제</span>
              </label>
              <label className="memPayLabel kakaoPayBtn" htmlFor="kakao">
                <img src="../images/kakao-talk.png" alt="kakao" />
                <span>카카오페이</span>
              </label>
            </div>
            <div className="memPayLabel payBoxWrap ">
              <div className="MemPayOrderCardPayment displayFlex">
                <div>
                  <p>카드 선택</p>
                  <div>
                    <select name="PaymentMethcard" id="PaymentMethcard" className="cardPaymentSelect">
                      <option value={1}>카드를 선택하세요</option>
                      <option value={2}>신한카드</option>
                      <option value={3}>비씨카드</option>
                      <option value={4}>국민카드</option>
                      <option value={5}>삼성카드</option>
                      <option value={6}>현대카드</option>
                      <option value={7}>롯데카드</option>
                      <option value={8}>하나카드</option>
                      <option value={9}>외환카드</option>
                      <option value={10}>농협카드</option>
                      <option value={11}>씨티카드</option>
                      <option value={12}>우리카드</option>
                      <option value={13}>광주카드</option>
                      <option value={14}>제주카드</option>
                      <option value={15}>전북카드</option>
                      <option value={16}>수협카드</option>
                      <option value={17}>우체국카드</option>
                      <option value={18}>MG새마을카드</option>
                      <option value={19}>신협카드</option>
                      <option value={20}>카카오뱅크카드</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p>할부 기간</p>
                  <div className="halbuWrap">
                    <select name="halbuMonth" id="halbuMonth" className="halbuMonth" disabled>
                      <option value={1}>일시불</option>
                      <option value={2}>1개월</option>
                      <option value={3}>2개월</option>
                      <option value={4}>3개월</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="accountDepositeWrap displayNone">
                <div>
                  <p>은행 선택</p>
                  <div>
                    <select className="memPaySel DepositeBankSelect" name="DepositeBankSelect" id="DepositeBankSelect">
                      <option value={1}>카드를 선택하세요</option>
                      <option value={2}>신한은행</option>
                      <option value={3}>국민은행</option>
                      <option value={4}>하나은행</option>
                      <option value={5}>외환은행</option>
                      <option value={6}>농협은행</option>
                      <option value={7}>우리은행</option>
                      <option value={8}>수협</option>
                      <option value={9}>MG새마을금고</option>
                      <option value={10}>카카오뱅크</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p>입금자명</p>
                  <div><input type="text" htmlFor="depositeCustomerName" className="depositeCustomerName" placeholder="입금자명을 입력하세요" /></div>
                </div>
                <div className="cashBillsWrap">
                  <p>현금영수증 발행</p>
                  <div className="cashBillInputWrap">
                    <div className="cashBillTypeWrap">
                      <span className="cashBillTypeIncome">소득공제</span>
                      <span className="cashBillTypeProve">지출증빙</span>
                      <span className="cashBillTypeNo">신청안함</span>
                    </div>
                    <div className="cashBillTypeIncomeNum displayBlock">
                      <input className="cashBillFirstPhoneNum" name="firstPhoneNum" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" type="text" minLength={2} maxLength={3} />-
                      <input className="cashBillSecondPhoneNum" name="secondPhoneNum" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" type="text" minLength={4} maxLength={4} required />-
                      <input className="cashBillThirdPhoneNum" name="thirdPhoneNum" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" type="text" minLength={4} maxLength={4} required />
                    </div>
                    <div className="cashBillTypeProveNumwrap displayNone">
                      <input className="cashBillTypeProveNum" type="text" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" placeholder="사업자등록번호를 입력해주세요.('-'제외)" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobilePayWrap displayNone">
                <p>휴대폰 결제 한도 금액은 30만원입니다</p>
                <p>개인에 따라 이용 한도 금액이 상이할 수 있으니 정확한 이용 한도 금액은 이용 중인 통신사에 문의해 주세요 ( 휴대폰에서 114 문의 )
                </p>
              </div>
              <div className="kakaoPayBtn displayNone">
                결제하기 버튼을 눌러주시면 됩니다.
              </div>
            </div>
          </div>
          <div className="MemberPayMentFinPrice">
            <p>최종 결제금액</p>
            <div>
              <div className="MemPayProductPriceWrap">
                <span>상품금액</span>
                <span><strong>1,150,000</strong>원</span>
              </div>
              <div className="MemPayDiscountPriceWrap">
                <span>할인금액</span>
                <span>- <strong>0</strong>원</span>
              </div>
              <div className="MemPayDelieveryFeeWrapWrap">
                <span>배송비</span>
                <span>+ <strong>25,000</strong>원</span>
              </div>
              <div className="MemPayTotalPriceWrap">
                <span>총 결제 예상금액(1건)</span>
                <span><strong />원</span>
              </div>
              <div>
                <span>적립예상 페이백</span>
                <span><strong>0</strong>원</span>
              </div>
            </div>
            <p className="MemPayOrderTotalAgree">
              <input type="checkbox" name="agree" id="agree" defaultValue="allAgree" />
              <label htmlFor="agree" className="memPayLabel">
                <img src="./unChecked.png" alt="img" />
              </label>
              <label htmlFor="agree" className="memPayLabel">전체 동의하기</label>
            </p>
            <ul className="MemPayOrderTotalAgreeSection">
              <li className="MemPayOrderTotalAgreeSectionList">
                <input type="checkbox" name="agree" id="agree1" defaultValue="agree1" />
                <label htmlFor="agree1" className="memPayLabel">
                  <img src="./unChecked.png" alt="img" />
                </label>
                <label htmlFor="agree1" className="memPayLabel">
                  (필수)구매조건 확인 및 결제진행 동의
                </label>
              </li>
              <li className="MemPayOrderTotalAgreeSectionList">
                <input type="checkbox" name="agree" id="agree2" defaultValue="agree2" />
                <label htmlFor="agree2" className="memPayLabel">
                  <img src="./unChecked.png" alt="img" />
                </label>
                <label htmlFor="agree2" className="memPayLabel">
                  (필수)개인정보 수집 및 이용동의
                </label>
              </li>
              <li className="MemPayOrderTotalAgreeSectionList">
                <input type="checkbox" name="agree" id="agree3" defaultValue="agree3" />
                <label htmlFor="agree3" className="memPayLabel">
                  <img src="./unChecked.png" alt="" /></label>
                <label htmlFor="agree3" className="memPayLabel">
                  (필수)개인정보 제3자 제공동의
                </label>
              </li>
            </ul>
            <div>
              <button className="PaymentOrderBtn btnDisable"><a href="./paymentComplete.html">주문하기</a></button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
);
}