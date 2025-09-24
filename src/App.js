import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Meteorology from "./components/Meteorology";
import Forecast from "./components/Forecast";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
         <nav>
            <Link to='/atual'>Clima atual</Link>
            <Link to='/previsao'>Previsão</Link>
         </nav>
         <Routes>
            <Route path='/atual' element={<Meteorology/>}/>
            <Route path='/previsao' element={<Forecast/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
