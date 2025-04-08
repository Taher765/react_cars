import Details from "./components/details/Details";
import Home from "./components/home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddCar from "./components/addCar/AddCar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// information
