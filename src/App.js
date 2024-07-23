import logo from './logo.svg';
import './App.css';
import ComboBox from './ComboBox';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

const SPlist = ['SP1', 'SP2'];
const APPlist = [];


function App() {
  return (
    <div>

        <Navbar/>
        <div className='sp-app-drop-down-section'>
        <ComboBox className="item" options={SPlist} placeholder="Select Service Provider"/> 
        <ComboBox className="item" options={APPlist} placeholder="Select Application"/>
        </div>
       
        <Footer/>

    </div>
  );
}

export default App;
