import React from 'react'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import ConcertDetail from './pages/ConcertDetail';


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <main>
        <Routes>
        
        <Route exact path="/concerts/:concertId" element={<ConcertDetail />}>Concert</Route>

        <Route exact path="/" element={<Main />} />
            
        </Routes>
        </main>
      </Router>
    </div>
  )
}