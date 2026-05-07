import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove user session
    localStorage.removeItem("user");

    // redirect to login
    navigate("/login");
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">
        Dashboard
      </h1>

      <p className="text-gray-700">
        Welcome to the PetCare System 🐾
      </p>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/pets")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Pets
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}