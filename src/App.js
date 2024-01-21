import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import About from "./About";
import ProductDetails from "./ProductDetails";
import ProtectedRoute from "./ProtetedRoute";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home/*"
          element={<ProtectedRoute element={<AuthenticatedApp />} />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

function AuthenticatedApp() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
