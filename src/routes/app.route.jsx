import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import ForgetPassword from '../pages/ForgetPassword';
import AuthProvider from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import RouteHome from './home.route.jsx';


const RouteApp = () => (
    <AuthProvider>
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/cadastro' element={<Cadastro />}></Route>
                <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
                <Route path="/*" element={<ProtectedRoute element={<RouteHome />} />} />
            </Routes>
        </Router>
    </AuthProvider>
)

export default RouteApp