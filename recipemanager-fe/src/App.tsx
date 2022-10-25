import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import IngredientsPage from "./components/pages/IngredientsPage/IngredientsPage";
import RecipesPage from "./components/pages/RecipesPage/RecipesPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";
import ProtectedRoute from "./components/atoms/ProtectedRoute/ProtectedRoute";
import PageLayout from "./PageLayout";

function App() {
  return (
    <>
      <Router>
        <AuthenticationContextProvider>
          <Sidebar />
          <PageLayout>
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route path="/ingredients" element={<ProtectedRoute />}>
                <Route path="/ingredients" element={<IngredientsPage />} />
              </Route>
              <Route path="/recipes" element={<ProtectedRoute />}>
                <Route path="/recipes" element={<RecipesPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </PageLayout>
        </AuthenticationContextProvider>
      </Router>
    </>
  );
}

export default App;
