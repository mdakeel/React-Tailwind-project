
import './App.css';
import { About } from './components/About';
import { Features } from './components/Features';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { Pricing } from './components/Pricing';
import { Footer } from './shared/Footer';
import { SignUp } from './components/SignUp';
import { AllRoutes } from './components/Routes/AllRoutes'

function App() {
  return (
    <>
        <AllRoutes />
    </>
  );
}

export default App;
