import './App.css';
import Navbar from './components/navbar';
import Main from "./components/main"
import Section from './components/section';
import Sectiontwo from './components/sectiontwo';
import Card from './components/card';
import Sectionfour from './components/input';
import Footer from './components/footer';


function App() {



  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <Main/>
      </div>
      <div className='footer'>
        <Section/>
      </div>
      <div className='sections'>
        <Sectiontwo/>
      </div>
      <div className='sectionss'>
        <Card/>
      </div>
      <div className='sectionsss'>
        <Sectionfour/>
      </div>
      <div className='sectionssss'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
