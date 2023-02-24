import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//메인페이지
import MainPage from './pages/mainPage';

//admin페이지
import AdminMain from './pages/adminMain';
import AdminUser from './templetes/admin/adminUser';
import AdminProduct from './templetes/admin/adminProduct';
import AdminStaff from './templetes/admin/adminStaff';
import AdminEtc from './templetes/admin/adminEtc';
import AdminLogin from './pages/adminLogin';

//ref
import RefPage from './instanceData/productRef';

import './App.css';
import Login from './common/login/login';
import SignUp from './common/signUp/signUp';

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

        {/* RefPage */}
        <Route path='/ref' element={<RefPage />} />



      </Routes>
    </Router>
  );
}

export default App;
