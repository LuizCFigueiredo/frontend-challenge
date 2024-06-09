import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Sidebar from '../pages/SideBarHome';
import MoedaDetalhes from '../pages/MoedasDetalhes'

const RouteHome = () => {
    return(
        <>
        <Sidebar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/moeda/:id" element={<MoedaDetalhes />} />
        </Routes>
        </>
    )
}

export default RouteHome;
