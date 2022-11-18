import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from "./components"
import { Home, LandingPage, ListedCompanies, CompanyPage } from './pages'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='landing' element={<LandingPage />} />
        <Route path='companies' element={<ListedCompanies />} />
        <Route path='companies/:id' element={<CompanyPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}


export default App;
