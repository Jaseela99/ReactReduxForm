import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Users from "./components/Users"
import DateCalc from './components/DateCalc';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Users/>} />
  <Route exact path="/date" element={<DateCalc/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
