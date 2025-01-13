
import React, { useState } from 'react'
import Spinner from '../Spinner';
import { enqueueSnackbar } from 'notistack';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Forpwd = () => {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const res = await newRequest.post("/auth/srmail", { username });
        //   localStorage.setItem("currentUser", JSON.stringify(res.data));
          setLoading(false);
          navigate("/")
          enqueueSnackbar("A reset link has been sent to your registered email. Please use it to reset your password.", { variant: 'info' });
        } catch (err) {
            console.log(err);
          enqueueSnackbar(err.response.data, { variant: 'error' });
          // "An error occured!!! Please try again later."
          setLoading(false);
        }
      };
  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <h1>Forgot Password?</h1>
            <label htmlFor="">Username</label>
            <input
            name="username"
            type="text"
            placeholder="Username or Email"
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">{loading ? <Spinner /> : 'Reset Password'}</button>
        </form>
    </div>
  )
}

export default Forpwd;