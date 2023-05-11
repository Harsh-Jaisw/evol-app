import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Top from "./pages/TopRated/Top";
import Recent from "./pages/Recentlyadded/Recent";
import Login from "./Modal/Login/Login";
import Register from "./Modal/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Register/>}/>
      <Route path="/top" element={<Top/>}/>
      <Route path="/recent" element={<Recent/>}/>
    </Routes>
  );
}

export default App;
