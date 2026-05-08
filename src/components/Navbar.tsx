export default function Navbar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (value: boolean) => void;
}) {
  return (
    <div className="p-4 bg-blue-500 dark:bg-gray-800 text-white flex justify-between">
      <h1 className="font-bold">PetCare Dashboard</h1>

      <div className="flex gap-4 items-center">
        <a href="/dashboard">Dashboard</a>
        <a href="/pets">Pets</a>

        <button
          onClick={() => setDark(!dark)}
          className="bg-white text-black px-2 py-1 rounded"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}