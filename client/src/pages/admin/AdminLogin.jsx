import { enqueueSnackbar } from "notistack";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Spinner from "../../components/Spinner";


const AdminLogin = ({setL}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    // const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

        if(username==="admin" && password=="adm"){
            setL(true);
            return setLoading(false);
        }
        else{
            enqueueSnackbar("Invalid username or password", { variant: 'error' });
            setLoading(false);
        }
  
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
          {/* <Link className="link" to="/forgot-password">Forgot Password?</Link> */}
          <button type="submit">{loading ? <Spinner /> : 'Login'}</button>
          {/* {error && error} */}
        </form>
      </div>
    );
  }
}
  export default AdminLogin;
