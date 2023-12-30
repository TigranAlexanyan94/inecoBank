import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './pages/Header';
// import About from './pages/About';
// import NavBar from './component/navbar/NavBar';
import Individual from './pages/individual/Individual';
import Business from './pages/business/Business'
import Premium from './pages/premium/Premium';
import Signup from './pages/register/signup/SignUp';
import SignIn from './pages/register/signin/SignIn';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Individual />} />
        <Route path="/business" element={<Business />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/reg" element={<Signup />} />
        <Route path="/login" element={<SignIn />} />

        {/* <Route path="/contact" element={<Header />} /> */}
        {/* <Route path="*" element={<Header />} /> */}
      </Routes>
    </div>
  );
};

export default App;
