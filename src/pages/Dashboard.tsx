import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    toast.success("Logged out successfully!");

    navigate("/login");
  };

  const goToPets = () => {
    toast("Opening Pets page...", {
      icon: "🐾",
    });

    navigate("/pets");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="flex gap-4">
        <Button variant="contained" onClick={goToPets}>
          View Pets
        </Button>

        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}