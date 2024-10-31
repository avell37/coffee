import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import MainPage from "../pages/mainPage/mainPage"
import OurCoffeePage from "../pages/ourCoffeePage/ourCoffeePage";
import SingleCoffeePage from "../pages/singleCoffeePage/singleCoffeePage";
import PleasurePage from '../pages/pleasurePage/pleasurePage';

const App = () => {
    return (
        <Router  basename="/coffee-shop">
            <div className="app">
                <Routes>
                    <Route end path="/" element={<MainPage/>} />
                    <Route end path="/our-coffee" element={<OurCoffeePage/>} />
                    <Route end path="/coffee/:id" element={<SingleCoffeePage/>} />
                    <Route end path="/pleasure" element={<PleasurePage/>} />
                </Routes>
            </div>
        </Router>
        
    )
}

export default App