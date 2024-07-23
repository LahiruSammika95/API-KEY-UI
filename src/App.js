import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import './App.css';
import ComboBox from './components/ComboBox';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import TestBox from './components/TestBox';




function App() {
const [spList,setSpList] = useState(['SP1', 'SP2']);
const [appList,setAppList] = useState([]);



const handleSelect = (event, value) => {
  setAppList([]);
  console.log('Selected option:', value);
  if(value==='SP1') {
    setAppList(["app1","app2"])
  }
  if(value==='SP2') {
    setAppList(["app3","app4"])
  }
  // Print selected value to console
  // You can perform other actions based on the selected value here
};
  return (
    <div>

        <Navbar/>
        <div className='sp-app-drop-down-section'>
        <ComboBox className="item" options={spList} placeholder="Select Service Provider" handleSelect={handleSelect}/> 
        <ComboBox className="item" options={appList} placeholder="Select Application"/>
        </div>
        <TestBox/>
       
        <Footer/>

    </div>
  );
}

export default App;
