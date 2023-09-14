import { Route, Routes } from "react-router-dom";
import Header from "./compoments/Header";
import HomeScreen from "./screens/HomeScreen";
import PackagesScreen from "./screens/PackagesScreen";
import ShipmentScreen from "./screens/ShipmentScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/packages" element={<PackagesScreen />} />
        <Route path="/shipment/:id" element={<ShipmentScreen />} />
      </Routes>
    </div>
  );
}

export default App;
