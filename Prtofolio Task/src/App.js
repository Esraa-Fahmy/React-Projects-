import Header from './components/Header';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';

import Portifoli from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Portifoli/>
      <Footer/>
    </div>
  );
}

export default App;
