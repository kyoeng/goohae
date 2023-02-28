// import React,{useState} from "react";

import "../../../css/myPage/myAddress/addAddress.css"
import redDot from "../../../../stores/images/icon/redDot.png"
import AppLayout from './../../../../common/layout/AppLayout';


export default function AddAddress(props) {
	const { onClose } = props;
	// let addAddressWrap = document.querySelector('.addAddressWrap'),
	// 	form = document.querySelector('form'),
	// 	ul = document.querySelector('ul'),
	// 	input = document.querySelectorAll('input'),
	// 	span = document.querySelectorAll('span'),
	// 	addCancel = document.querySelector('.addCancel'),
	// 	button = document.querySelector('button');

	// function ad() {
	// 	if (input[0].value == "") {
	// 		span[0].classList.remove('hidden');
	// 		return false;
	// 	} else {
	// 		span[0].classList.add('hidden');
	// 		return true;
	// 	}
	// }

	// function adNm() {
	// 	if (input[1].value == "") {
	// 		span[1].classList.remove('hidden');
	// 		return false;
	// 	} else {
	// 		span[1].classList.add('hidden');
	// 		return true;
	// 	}
	// }

	// function adIp() {
	// 	if (input[2].value == "" || input[3].value == "" || input[4].value == "") {
	// 		span[2].classList.remove('hidden');
	// 		return false;
	// 	} else {
	// 		span[2].classList.add('hidden');
	// 		return true;
	// 	}
	// }

	// function adPhone() {
	// 	if (input[8].value == "" || input[9].value == "") {
	// 		span[7].classList.remove('hidden');
	// 		return false;
	// 	} else {
	// 		span[7].classList.add('hidden');
	// 		return true;
	// 	}
	// }


	// document.addEventListener('keydown', function (e) {
	// 	if (e.keyCode === 13) {
	// 		ad();
	// 		adNm();
	// 		adIp();
	// 		adPhone();
	// 		if (ad() && adNm() && adIp() && adPhone()) {
	// 			form.submit();
	// 			addAddressWrap.classList.add('hidden');
	// 		}
	// 	}
	// });

	// button.addEventListener('click', function (e) {
	// 	e.preventDefault();
	// 	ad();
	// 	adNm();
	// 	adIp();
	// 	adPhone();
	// 	if (ad() && adNm() && adIp() && adPhone()) {
	// 		form.submit();
	// 		window.closed();
	// 	}
	// });

	return (
		<AppLayout>
			<main>
				<section className="addAddressWrap">
					<article className="addressCaution">
						<p>
							배송주소등록
						</p>
						{/* <ul class="adDisplayNone">
					<li><strong>1.&nbsp;</strong>배송 주소록은 최대 10개까지 등록할 수 있으며, 별도로 등록하지 않을 경우 최근 배송 주소록 기준으로 자동 업데이트 됩니다.
					</li>
					<li><strong>2.&nbsp;</strong>자동 업데이트를 원하지 않을 경우 주소록 고정 선택을 선택하시면 선택된 주소록은 업데이트 대상에서 제외됩니다.</li>
					<li><strong>3.&nbsp;</strong>기본 배송지는 1개만 저장됩니다. 다른 배송지를 기본 배송지로 설정하시면 기본 배송지가 변경됩니다.</li>
				</ul> */}
					</article>
					<div action="#" name="addressInfo" className="addAddressForm">
						<div>
							<p>배송지명<img src={redDot} alt="필수" /></p>
							<input type="text" name="addressName" required />
							<span className="hidden">필수입력사항입니다.</span>
						</div>
						<div>
							<p>이름<img src={redDot} alt="필수" /></p>
							<input type="text" name="getPostName" required />
							<span className="hidden">필수입력사항입니다.</span>
						</div>
						<div className="addressInputWrap">
							<p>주소<img src={redDot} alt="필수" /></p>
							<div className="addressInput">
								<div><input type="text" name="postNum" required /><a href="#">우편번호 찾기</a></div>
								<div><input type="text" name="basicAddress" required placeholder="기본 주소를 입력해주세요" /></div>
								<div><input type="text" name="detailedAddress" required placeholder="상세 주소를 입력해주세요" /></div>
							</div>
							<span className="hidden">필수입력사항입니다.</span>
						</div>
						<div className="tell">
							<p>일반전화</p>
							<select name="firstPhoneNumber">
								<option value={1}>02</option>
								<option value={2}>051</option>
								<option value={3}>053</option>
								<option value={4}>032</option>
								<option value={5}>062</option>
								<option value={6}>042</option>
								<option value={7}>052</option>
								<option value={8}>044</option>
								<option value={9}>031</option>
								<option value={10}>033</option>
								<option value={11}>043</option>
								<option value={12}>041</option>
								<option value={13}>063</option>
								<option value={14}>061</option>
								<option value={15}>054</option>
								<option value={16}>055</option>
								<option value={17}>064</option>
							</select>
							<span className="tellSpace">-</span>
							<input type="tel" name="midPhoneNum" minLength={3} maxLength={4} size={1} onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className="tellSpace">-</span>
							<input type="tel" name="lastPhoneNum" minLength={4} maxLength={4} size={1} onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
						</div>
						<div className="tell">
							<p>휴대전화<img src={redDot} alt="필수" /></p>
							{/* <input type="tel" name="firstSmartphoneNum" defaultValue={010} minLength={3} maxLength={3} size={1} readOnly /> */}
							<span className="tellSpace">-</span>
							<input type="tel" name="midSmartphoneNum" minLength={3} maxLength={4} size={1} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className="tellSpace">-</span>
							<input type="tel" name="lastSmartphoneNum" minLength={4} maxLength={4} size={1} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className="hidden">필수입력사항입니다.</span>
						</div>
						<div><input type="checkbox" name="defaultAddress" /> <span>기본 주소지로 저장</span></div>
						<p className="addressFormButtonWrap">
							<button type="button" className="addAddressBtn" id="addCancel" onClick={() => { onClose(false) }}>취소</button>
							<button type="submit" className="addAddressBtn"  >등록</button>
						</p>
					</div>
				</section>
				{/* ------------------------------------------------------------------------------------- */}
			</main>
		</AppLayout>
	);
}

