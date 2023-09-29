import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Finish from './pages/Finish';
import Home from './pages/Home';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/test' element={<Test/>} />
            <Route path='/finish' element={<Finish/>} />
        </Routes>
    );
}

export default App;
