import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
