import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ValuesDetails from './pages/ValuesDetails';
import PrinciplesDetails from './pages/PrinciplesDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/values/:id" element={<ValuesDetails />} />
            <Route path="/principles/:id" element={<PrinciplesDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;