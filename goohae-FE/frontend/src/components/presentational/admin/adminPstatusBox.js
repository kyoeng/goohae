import adminPstatusBox from '../../CSS/admin/adminPstatusBox.module.css';


export default function AdminPstatusBox({ StatusArr, ProdData }) {

    return (
        <div className={adminPstatusBox.statusContainer}>
            {
                StatusArr.map((item, idx) => {
                    return (
                        <div key={`adminPstatusBox${idx}`} className={adminPstatusBox.statusWrap}>
                            <div className={adminPstatusBox.pStatusBox}>
                                <div className={adminPstatusBox.iconWrap}>
                                    <img src={StatusArr[idx].icon} alt="전체" />
                                </div>

                                <div className={adminPstatusBox.prodStatusWrap}>
                                    <span>{StatusArr[idx].statusName}</span>
                                    <span>{`${ProdData.length}`} 건</span>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    );
}