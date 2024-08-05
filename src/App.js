import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/home/homePage';
import MakeupArtistsPage from './components/artist/makeup.component';
import HairStylistsPage from './components/artist/hairstylists.component'
// import * as Routes from './utilities/'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/makeup-artists" element={<MakeupArtistsPage />} />
        <Route path="/hair-stylists" element={<HairStylistsPage />} />
      </Routes>
    </Router>


  )
}

export default App;
