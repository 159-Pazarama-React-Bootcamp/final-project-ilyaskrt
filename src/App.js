import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./auth"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="basvuru-olustur" element={<Home />} />
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
        <h2 >Başvuru Formunu</h2>
        <Auth></Auth>
      </main>
      <nav>
        <Link to="/basvuru-sorgula">Başvuru Durumu Sorgula</Link>
      </nav>
    </>
  );
}

function Successful(){
  return(
    <>
    <nav>
      <Link to="/basvuru-olustur">Basvuru ekranına git.</Link> 
    </nav>
    </>
  );
}
function Query(){
    return(
    <>
    <main>
        <p>Sorgulama ekranına hoş geldiniz.</p>
    </main>
    <nav>
      <Link to="/basvuru-olustur">Basvuru ekranına git.</Link> 
    </nav>
    </>
    );
}
export default App;
