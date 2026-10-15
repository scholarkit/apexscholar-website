import './index.css';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import SecurityArchitecture from './components/SecurityArchitecture';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <Overview />
      <Features />
      <SecurityArchitecture />
      <Pricing />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

