import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, LandingPage, ListedCompanies, ApplicationPage, Register, Contacts, SingleContact, Create, CreateContact, CreateApplication, AllApplications } from './pages';

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
        <Route path='contacts' element={<Contacts />} />
        <Route path='contacts/:id' element={<SingleContact />} />
        <Route path='contact' element={<CreateContact />} />
        <Route path='all' element={<AllApplications />} />
      </Routes>
    </Router>

  );
}


export default App;
