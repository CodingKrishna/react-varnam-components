import './App.css';
import UIcomponents from './Components/LandingPage';
import Buttons from './Components/Buttons';
import Tabs from './Components/Tabs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Badges from './Components/Badges';
import Spinners from './Components/Spinners';
import Popup from './Components/Popup';
import ProgressBars from './Components/ProgressBar';
import Accordion from './Components/Accordion';
import Coursoel from './Components/Coursoel';
import ModelDialogue from './Components/ModelDialouge';
import Pagination from './Components/Pagination';
import BreadCrumbs from './Components/BreadCrumbs';
import NavBar from './Components/NavBar';
import Cards from './Components/Cards';
import Panels from './Components/Panels';
import Toster from './Components/Toster';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UIcomponents />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="badges" element={<Badges />} />
          <Route path="spinners" element={<Spinners />} />
          <Route path="popup" element={<Popup />} />
          <Route path="progressbars" element={<ProgressBars />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="coursoel" element={<Coursoel />} />
          <Route path="modeldialouge" element={<ModelDialogue />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="breadcrumbs" element={<BreadCrumbs />} />
          <Route path="navbar" element={<NavBar />} />
          <Route path="cards" element={<Cards />} />
          <Route path="panels" element={<Panels />} />
          <Route path="tosters" element={<Toster />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
