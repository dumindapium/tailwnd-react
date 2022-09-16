import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Wallet from './Wallet';
import About from './About';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <Router>
      <div className="font-nunito container mx-auto">  {/* Container */}
        <Navbar />
        <div  className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2" > {/* Contents */}
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/wallet' element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
