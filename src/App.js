import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

//Pages
import {Home} from './pages/Home/Home';
import {Navbar} from './components/Navbar';
import {ListBeers} from './pages/ListBeers/ListBeers';


function App() {
  return (
    <div className="App">
    <Navbar />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/all-beer" element={<ListBeers />}/>
     </Routes>
    </div>
  );
}

export default App;
