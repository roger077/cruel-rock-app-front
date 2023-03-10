
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styles from './App.module.css';
import Main from './pages/main/Main';
import About from './pages/about/About';
import ConcertDetail from './pages/concert-detail/ConcertDetail';


export default function App() {
  return (
    <div className={ styles.app }>
      <Router>
        <Navbar />
        <main>
        <Routes>
        <Route exact path="/concerts/:concertId" element={<ConcertDetail />}>Concert</Route>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}