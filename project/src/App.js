import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basvuru-olustur" element={<Application />} />
        <Route path="basvuru-basarili" element={<Successful/>} />
        <Route path="basvuru-sorgula" element={<Query/>} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Giriş Sayfasına Hoş Geldiniz :)</h2>
        <p>Giriş sayfasına gidiş için linke tıklayınız.</p>
      </main>
      <nav>
        <Link to="/basvuru-olustur">Başvuru Durumu Sorgula</Link>
      </nav>
    </>
  );
}

function Application() {
  return (
    <>
     
      <nav>
        <Link to="/">Anasayfa </Link> 
      </nav>
    </>
  );
  }

  function Successful(){
    <>
    <nav>
      <Link to="/register">Register for free </Link> 
    </nav>
    </>
  }
  function Query(){
    <>
    
    </>
  }
export default App;
