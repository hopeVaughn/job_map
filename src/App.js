import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from "./components"

import { Home, LandingPage, ListedCompanies, CompanyPage, Login, Register, Network, SingleNetwork, Create, CreateContact } from './pages';

import { useState } from "react";

function App() {

  const [levelClicked, setLevelClicked] = useState("");
  const [Auth, setAuth] = useState(false);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='landing' element={<LandingPage setLevelClicked={setLevelClicked} />} />
        <Route path='companies' element={<ListedCompanies levelClicked={levelClicked} />} />
        <Route path='companies/:id' element={<CompanyPage />} />
        <Route path='create' element={<Create />} />
        <Route path='login' element={<Login setAuth={setAuth} />} />
        <Route path='register' element={<Register setAuth={setAuth} />} />
        <Route path='network' element={<Network />} />
        <Route path='network/:id' element={<SingleNetwork />} />
        <Route path='contacts' element={<CreateContact />} />
      </Routes>
      <Footer />
    </Router>

  );
}


export default App;
