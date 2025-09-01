import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
export default Login;
