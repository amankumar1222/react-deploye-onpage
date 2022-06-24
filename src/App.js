import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextFrom from './Components/TextFrom'
// import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'ligh') {
      setMode('dark');
      document.body.style.backgroundColor = "#072648"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark  Mode"

      setInterval(() => {
        document.title = "TextUtils is Amzing Mode"
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now"
      }, 1500);
    }
    else {
      setMode('ligh');
      document.body.style.backgroundColor = "#fff"
      showAlert("ligh mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" home="Home" link="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <Routes>
            <Route exact path="/about" element={<> <About/></>} >
             
            </Route>
            <Route exact path="/" element={ <>  <TextFrom showAlert={showAlert} heading="Enter The text  to analyse Below " mode={mode} /> </>}>
             
            </Route>
          </Routes> */}

        <TextFrom showAlert={showAlert} heading="Enter The text  to analyse Below " mode={mode} />

      </div>
      {/* </Router> */}
    </>

  );
  // 7:53
}

export default App;
