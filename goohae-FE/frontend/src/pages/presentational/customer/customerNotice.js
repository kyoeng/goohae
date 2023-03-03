import Table from './../../../components/presentational/admin/table';
import CustomerData from './../../../dummyData/customerData';


export default function CustomerNotice() {
    const cHeadData = [
        '글번호',
        '제목',
        '작성일',
        '작성자',
    ];
    
    return (
        <Table 
            tHeadData={cHeadData}
            />
    );
}