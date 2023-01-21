import React from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styles from './App.module.css';
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
        <Route exact path="/login" element={<Login />} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}