import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/" element={<RequiredAuth>
           <Home/>
         </RequiredAuth>}>
         </Route>
         <Route path="/login" element={<Login />}></Route>
       </Routes>
    </div>
  );
}

export default App;
