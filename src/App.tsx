import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import Pets from "./pages/Pets";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pets"
        element={
          <ProtectedRoute>
            <Pets />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}