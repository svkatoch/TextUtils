
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');//whether mode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  // const[name, setname] = useState('LightMode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#212529';
      showAlert("Dark mode enabled","success");
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark mode is disabled","success");
    }
  }
  // const mode_name_change =()=>{
  //   if(name === 'LightMode')
  //   {
  //     setname('DarkMode');
  //   }
  //   else{
  //     setname('LightMode');
  //   }
  // }
  return (

    <>
      {/* <Navbar title="TextUtils" abouttitle="About Us" hometitle="Home"/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze Below" mode={mode}/>
        {/* <AboutUs/> */}

      </div>
    </>


  );
}

export default App;
