import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import IngredientsPage from "./components/pages/IngredientsPage/IngredientsPage";
import RecipesPage from "./components/pages/RecipesPage/RecipesPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";

function App() {
  const isAuth = window.location.pathname === "/login" || window.location.pathname === "/signup" 
  return (
    <div style={isAuth ? {} : {marginLeft: "180px"}} className="App">
      <Router>
      {!isAuth && <Sidebar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
