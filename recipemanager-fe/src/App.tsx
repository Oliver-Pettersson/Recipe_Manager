import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import IngredientsPage from "./components/pages/IngredientsPage/IngredientsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
