import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Sidebar from '../pages/SideBarHome';

const RouteHome = () => {
    return(
        <>
        <Sidebar />
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
        </>
    )
}

export default RouteHome;
