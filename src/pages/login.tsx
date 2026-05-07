function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
        />

       <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg shadow-md hover:scale-105 transition">
  Login
</button>
      </div>
    </div>
  );
}

export default Login;