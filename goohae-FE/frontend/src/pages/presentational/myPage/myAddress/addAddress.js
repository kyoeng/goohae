// import React,{useState} from "react";

import styles from "../../../css/myPage/myAddress/addAddress.module.css"
import redDot from "../../../../stores/images/icon/redDot.png"
import AppLayout from './../../../../common/layout/AppLayout';


export default function AddAddress(props) {
	const { onClose } = props;


	return (
		<AppLayout>
			<main>
				<section className={styles.addAddressWrap}>
					<article className={styles.addressCaution}>
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
					<div action="#" name="addressInfo" className={styles.addAddressForm}>
						<div>
							<p>배송지명<img src={redDot} alt="필수" /></p>
							<input type="text" name="addressName" required />
							<span className={styles.hidden}>필수입력사항입니다.</span>
						</div>
						<div>
							<p>이름<img src={redDot} alt="필수" /></p>
							<input type="text" name="getPostName" required />
							<span className={styles.hidden}>필수입력사항입니다.</span>
						</div>
						<div className={styles.addressInputWrap}>
							<p>주소<img src={redDot} alt="필수" /></p>
							<div className={styles.addressInput}>
								<div><input type="text" name="postNum" required /><a href="#">우편번호 찾기</a></div>
								<div><input type="text" name="basicAddress" required placeholder="기본 주소를 입력해주세요" /></div>
								<div><input type="text" name="detailedAddress" required placeholder="상세 주소를 입력해주세요" /></div>
							</div>
							<span className={styles.hidden}>필수입력사항입니다.</span>
						</div>
						<div className={styles.tell}>
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
							<span className={styles.tellSpace}>-</span>
							<input type="tel" name="midPhoneNum" minLength={3} maxLength={4} size={1} onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className={styles.tellSpace}>-</span>
							<input type="tel" name="lastPhoneNum" minLength={4} maxLength={4} size={1} onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
						</div>
						<div className={styles.tell}>
							<p>휴대전화<img src={redDot} alt="필수" /></p>
							{/* <input type="tel" name="firstSmartphoneNum" defaultValue={010} minLength={3} maxLength={3} size={1} readOnly /> */}
							<span className={styles.tellSpace}>-</span>
							<input type="tel" name="midSmartphoneNum" minLength={3} maxLength={4} size={1} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className={styles.tellSpace}>-</span>
							<input type="tel" name="lastSmartphoneNum" minLength={4} maxLength={4} size={1} required onkeyup="this.value=this.value.replace(/[^0-9]/g,'');" />
							<span className={styles.hidden}>필수입력사항입니다.</span>
						</div>
						<div><input type="checkbox" name="defaultAddress" /> <span>기본 주소지로 저장</span></div>
						<p className={styles.addressFormButtonWrap}>
							<button type="button" className={styles.addAddressBtn} id={styles.addCancel} onClick={() => { onClose(false) }}>취소</button>
							<button type="submit" className={styles.addAddressBtn}  >등록</button>
						</p>
					</div>
				</section>
				{/* ------------------------------------------------------------------------------------- */}
			</main>
		</AppLayout>
	);
}

