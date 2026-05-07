import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

type Pet = {
  id: number;
  name: string;
  email: string;
};

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: Pet[]) => {
        setPets(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // filter pets based on search input
  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  // loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Pets Page</h1>

      {/* search input */}
      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      {/* pets list */}
      {filteredPets.map((pet) => (
        <div
          key={pet.id}
          className="border p-3 mb-2 rounded shadow"
        >
          <h2 className="font-bold">{pet.name}</h2>
          <p>{pet.email}</p>
        </div>
      ))}
    </div>
  );
}