import Home from './components/Home';
import './App.css';
import { Routes,  Route } from "react-router-dom";

function App() {
  return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
