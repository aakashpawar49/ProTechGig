import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import Spinner from "../../components/Spinner";
import Cookies from 'js-cookie';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      
      console.log(res);
      // const token = res.data.accessToken;
      const accessToken = Cookies.get('accessToken');
      console.log(`accessToken: ${accessToken}`);
      // const accessToken = Cookies.get('accessToken');
      const cookies = document.cookie;
      console.log(cookies);

      setLoading(false);
      navigate("/")
      enqueueSnackbar("Successfully logged in", { variant: 'success' });
    } catch (err) {
      setError(err.response.data);
      enqueueSnackbar(err.response.data, { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p>Forgot Password?</p> */}
        <Link className="link" to="/forgot-password">Forgot Password?</Link>
        <button type="submit">{loading ? <Spinner /> : 'Login'}</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;
