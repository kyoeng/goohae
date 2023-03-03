import { Outlet } from 'react-router-dom';

import AppLayout from "../../../common/layout/AppLayout";
import Boxlist from "../../../components/presentational/customer/boxList";

import customerStyled from '../../css/customer/customer.module.css';

export default function Customer(params) {
    return (
        <AppLayout>
            <div className={customerStyled.customerContainer}>
                <Boxlist />
                <Outlet />
            </div>
        </AppLayout>
    );
}