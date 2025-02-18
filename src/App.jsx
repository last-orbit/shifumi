import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Homepage from './pages/Homepg.jsx';
import Instructionpg from './pages/Instructionspg.jsx';
import Gamepg from './pages/Gamepg.jsx';
import NotFoundpg from './pages/NotFoundpg.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/Instructions' element={<Instructionpg/>} />
        <Route path='/Game' element={<Gamepg />} />
        <Route path='*' element={<NotFoundpg />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
