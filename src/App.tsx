import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Overview from './components/Overview';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <Overview />
      <Features />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
