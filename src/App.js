import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navigation/>
      <Routes>
        <Route path="/"></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/capture"></Route>
        <Route path="/captured"></Route>
        <Route path="/profile"></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
