import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
//메인페이지
import MainPage from './pages/presentational/mainPage/mainPage';

//admin페이지
import AdminMain from './pages/presentational/admin/adminMain';
import AdminUser from './pages/presentational/admin/adminUser';
import AdminProduct from './pages/presentational/admin/adminProduct';
import AdminStaff from './pages/presentational/admin/adminStaff';
import AdminEtc from './pages/presentational/admin/adminEtc';
import AdminLogin from './pages/presentational/admin/adminLogin';

//로그인,가입 ,아이디/비밀번호 찾기,비회원 배송조회 
import Login from './pages/presentational/login/login';
import SignUp from './pages/presentational/signUp/signUp';
import FindPw from './pages/presentational/findPw/findPw';
import FindId from './pages/presentational/findId/findId';
import NonMemberInquire from './pages/presentational/nonMemberInquire/nonMemberInquire';

import './App.css';
import MyPage from './pages/presentational/myPage/myPage/myPage';
import WishList from './pages/presentational/myPage/wishList/wishList';
import MyAddress from './pages/presentational/myPage/myAddress/myAddress';
import AddAddress from './pages/presentational/myPage/myAddress/addAddress';
import MemberInfo from './pages/presentational/myPage/memberInfo/memberInfo';
import MyOrder from './pages/presentational/myPage/myOrder/myOrder';
import MyPost from './pages/presentational/myPage/myPost/myPost';
import MyCoupon from './pages/presentational/myPage/myCoupon/myCoupon';
import ShoppingCart from './pages/presentational/myPage/shoppingCart/shoppingCart';

// 결제페이지
import MemberPayMent from './pages/presentational/memberPayment/memberPayMent';
import Header from './common/Header';

function App() {

  return (

    <>

      <Router>
        <Routes>


          {/* 메인페이지 */}
          <Route path='/' element={<MainPage />} />


          {/* 마이페이지 */}
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/wishList' element={<WishList />} />
          <Route path='/myAddress' element={<MyAddress />} />
          <Route path='/addAddress' element={<AddAddress />} />
          <Route path='/memberInfo' element={<MemberInfo />} />
          <Route path='/myCoupon' element={<MyCoupon />} />
          <Route path='/myOrder' element={<MyOrder />} />
          <Route path='/myPost' element={<MyPost />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} />


          {/* 
            헤더 없는 유저 페이지
            ( 로그인, 회원가입, id, pw 찾기 등 )
          */}
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPw' element={<FindPw />} />
          <Route path='/nonMemberInquire' element={<NonMemberInquire />} />



          {/* 로그인,가입 ,아이디/비밀번호 찾기 */}
          {/* <Route path='login' element={<Login />} />
          <Route path='signUP' element={<SignUp />} />
          <Route path='findPw' element={<FindPw />} />
          <Route path='findId' element={<FindId />} />
          <Route path='nonMemberInquire' element={<NonMemberInquire />} /> */}

          {/* 마이페이지 */}
          {/* <Route path='/myPage' element={<MyPage />} />
          <Route path='/wishList' element={<WishList />} />
          <Route path='/myAddress' element={<MyAddress />} />
          <Route path='/addAddress' element={<AddAddress />} />
          <Route path='/memberInfo' element={<MemberInfo />} />
          <Route path='/myOrder' element={<MyOrder />} />
          <Route path='/myPost' element={<MyPost />} />
          <Route path='/myCoupon' element={<MyCoupon />} />
          <Route path='/ShoppingCart' element={<ShoppingCart />} /> */}
          {/* 결제페이지 */}
          {/* <Route path='/memberPayMent' element={<MemberPayMent />} /> */}

          {/* 마이페이지 */}
          {/* <Route path='/myPage' element={<MyPage />} />
          <Route path='/wishList' element={<WishList />} />
          <Route path='/myAddress' element={<MyAddress />} />
          <Route path='/addAddress' element={<AddAddress />} />
          <Route path='/memberInfo' element={<MemberInfo />} />
          <Route path='/myOrder' element={<MyOrder />} /> */}

          {/* admin 페이지 */}
          {/* <Route path='adminmain/*' element={<AdminMain />} >
            <Route path='user' element={<AdminUser />} />
            <Route path='product' element={<AdminProduct />} />
            <Route path='staff' element={<AdminStaff />} />
            <Route path='etc' element={<AdminEtc />} />
          </Route>
          <Route path='/adminlogin' element={<AdminLogin />} /> */}

        </Routes>

      </Router>
    </>
  );
}

export default App;
