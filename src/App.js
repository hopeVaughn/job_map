import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, LandingPage, ListedCompanies, ApplicationPage, Register, Network, SingleNetwork, Create, CreateContact, CreateApplication } from './pages';

import { useState } from "react";

function App() {

  const [levelClicked, setLevelClicked] = useState("");


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<LandingPage setLevelClicked={setLevelClicked} />} />
        <Route path='register' element={<Register />} />
        <Route path='companies' element={<ListedCompanies levelClicked={levelClicked} />} />
        <Route path='application/:id' element={<ApplicationPage />} />
        <Route path='create' element={<Create />} />
        <Route path='create/:id' element={<CreateApplication />} />
        <Route path='contacts' element={<Network />} />
        <Route path='contacts/:id' element={<SingleNetwork />} />
        <Route path='contact' element={<CreateContact />} />
      </Routes>
    </Router>

  );
}


export default App;
