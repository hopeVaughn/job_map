import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from "./components"
import { Home, LandingPage, ListedCompanies, CompanyPage } from './pages';
import { useState } from "react";

function App() {

  const [levelClicked, setLevelClicked] = useState("");



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<LandingPage setLevelClicked={setLevelClicked}/>} />
        <Route path='companies' element={<ListedCompanies levelClicked={levelClicked}  />} />
        <Route path='companies/:id' element={<CompanyPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}


export default App;
