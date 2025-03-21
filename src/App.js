import Details from "./components/details/Details";
import Home from "./components/home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Overlay from "./components/overlay/Overlay";
import AddCar from "./components/addCar/AddCar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/details" element={<Details />} />
        <Route path="/overlay" element={<Overlay />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// information
