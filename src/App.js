import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState("light");
  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      document.title="dark mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.title="light mode";
    }
  };
  return (
    <>
    <Router>
    <Navbar title="Home" aboutText="About" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
        <Routes>
          <Route  exact path="/" element={<Text heading="textarea"/>}/>
          <Route exact path="/about" element={ <About/>}/>
        </Routes>
      </div>
    </Router>
     
    </>
  );
}

export default App;
