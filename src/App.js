import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/body/Banner';
import ServiceCards from './components/body/services/ServiceCards'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import Body from './components/body/Body';
import Footer from './components/footerComponents/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>

      <Footer/>

    </div>
  );
}

export default App;
