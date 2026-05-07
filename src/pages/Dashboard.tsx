import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl text-green-600 font-bold">
        Dashboard
      </h1>

      <p>Welcome to the VetCare System 🐾</p>

      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}