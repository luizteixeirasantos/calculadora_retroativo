import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Calculator from "./pages/Calculator";
import History from "./pages/History";
import SimpleCalculator from "./pages/SimpleCalculator";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 md:ml-64 p-6">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/simple-calculator" element={<SimpleCalculator />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
