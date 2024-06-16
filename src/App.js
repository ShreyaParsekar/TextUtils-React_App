
import './App.css';
import Alert from './components/Alert';
import Features from './components/Features';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [text, setText] = useState('Darkmode');
 const [alert, setAlert] = useState(null);


 const showalert =(message, type) => {
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
 }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      setText('Lightmode')
      showalert("Dark mode has been enabled","success")
      document.body.style.backgroundColor = '#042743';
    }else {
      setMode('light')
      setText('Darkmode')
      showalert("Light mode has been enabled","success")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutFeatures="Features" mode={mode} toggleMode={toggleMode} text={text}/>
    <Alert alert={alert}/>
    
    <Routes>
          
          <Route path="/features" element={<Features mode={mode}/>} />
          
          <Route path="/" element={<TextForm heading="Enter your text" showalert={showalert} mode={mode}/>} />
          
        </Routes>
   
    </Router>
</>
  );
  
}

export default App;
