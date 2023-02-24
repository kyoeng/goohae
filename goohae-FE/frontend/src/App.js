import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//메인페이지
import MainPage from './pages/presentational/mainPage/mainPage';

//admin페이지
import AdminMain from './pages/presentational/admin/adminMain';
import AdminUser from './pages/presentational/admin/adminUser';
import AdminProduct from './pages/presentational/admin/adminProduct';
import AdminStaff from './pages/presentational/admin/adminStaff';
import AdminEtc from './pages/presentational/admin/adminEtc';
import AdminLogin from './pages/presentational/admin/adminLogin';


import Login from './pages/presentational/login/login';
import SignUp from './pages/presentational/signUp/signUp';

import './App.css';
import MyPage from './pages/presentational/myPage/myPage/myPage';
import WishList from './pages/presentational/myPage/wishList/wishList';
import MyAddress from './pages/presentational/myPage/myAddress/myAddress';
import AddAddress from './pages/presentational/myPage/myAddress/addAddress';
import MemberInfo from './pages/presentational/myPage/memberInfo/memberInfo';
import MyOrder from './pages/presentational/myPage/myOrder/myOrder';

function App() {

  return (
    <Router>
      <Routes>

        {/* 메인페이지 */}
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signUP' element={<SignUp />} />

        {/* admin 페이지 */}
        <Route path='adminmain/*' element={<AdminMain />} >
          <Route path='user' element={<AdminUser />} />
          <Route path='product' element={<AdminProduct />} />
          <Route path='staff' element={<AdminStaff />} />
          <Route path='etc' element={<AdminEtc />} />
        </Route>

        <Route path='/adminlogin' element={<AdminLogin />} />
        마이페이지
        <Route path='/myPage' element={<MyPage/>}/>
        <Route path='/wishList' element={<WishList/>}/>
        <Route path='/myAddress' element={<MyAddress/>}/>
        <Route path='/addAddress' element={<AddAddress/>}/>
        <Route path='/memberInfo' element={<MemberInfo/>}/>
        <Route path='/myOrder' element={<MyOrder/>}/>

      </Routes>
    </Router>
  );
}

export default App;
