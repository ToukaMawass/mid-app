import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Card, CardContent, Typography, Button, Modal, Box } from "@mui/material";
import { useFetch } from "../hooks/useFetch";

type Pet = {
  id: number;
  name: string;
  email: string;
};

export default function Pets() {
  const { data: pets, loading, error } = useFetch<Pet>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [search, setSearch] = useState("");
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [open, setOpen] = useState(false);

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <p className="p-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Pets Page</h1>

      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded text-black dark:text-white dark:bg-gray-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPets.map((pet) => (
          <Card key={pet.id}>
            <CardContent>
              <Typography variant="h6">{pet.name}</Typography>
              <Typography color="text.secondary">{pet.email}</Typography>

              <Button
                variant="contained"
                className="mt-2"
                onClick={() => {
                  setSelectedPet(pet);
                  setOpen(true);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-80 mx-auto mt-40 text-black dark:text-white">
          {selectedPet && (
            <>
              <h2 className="text-xl font-bold">{selectedPet.name}</h2>
              <p>{selectedPet.email}</p>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}