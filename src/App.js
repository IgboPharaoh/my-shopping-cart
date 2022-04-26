import { Route, Routes } from "react-router";
import "./App.css";
import CartPage from "./components/CartPage";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
