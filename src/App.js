import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import HotelList from "./pages/hotelList/HotelList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels-list" element={<HotelList />} />
          <Route path="/hotels-list/hotel" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
