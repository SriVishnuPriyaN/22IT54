// pages/Signup.jsx
function Signup() {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded" />
      <input type="text" placeholder="Email" className="w-full p-2 mb-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
      <button className="w-full bg-green-600 text-white p-2 rounded">Create Account</button>
    </div>
  );
}
export default Signup;
