import React, { useState } from "react";
import styles from '../CSS/singlePage/emailInput.module.css';

export default function EmailInput() {
    const [email, setEmail] = useState("");
    const [domain, setDomain] = useState("");

    const handleEmailChange = (e) => {
        const emailId = e.target.value;
        if (emailId !== "" && domain !== "") {
            setEmail(`${emailId}@${domain}`);
        } else {
            setEmail(emailId);
        }
    };

    const handleDomainChange = (e) => {
        const selectedDomain = e.target.value;
        setDomain(selectedDomain);
        if (email !== "") {
            const emailId = email.split("@")[0];
            setEmail(`${emailId}@${selectedDomain}`);
        }
    };

    const domainOptions = ['gmail.com', 'naver.com', 'daum.net', 'hotmail.com'];

    return (
        <>
            <p className={styles.emailBoxLabel}>이메일</p>
            <div className={styles.emailBox}>
                <label htmlFor="emailInput">
                    <input
                        type="email"
                        id={styles.emailInput}
                        value={email.split("@")[0]}
                        onChange={handleEmailChange}
                    />
                </label>
                <span>@</span>
                <label htmlFor="domain-select">
                    <select id={styles.domainSelect} onChange={handleDomainChange} value={domain}>
                        <option value="">도메인 선택</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="yahoo.co.kr">yahoo.co.kr</option>
                    </select>
                </label>

            </div></>
    );
}

