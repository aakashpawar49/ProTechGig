import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import Spinner from '../../components/Spinner';
import VerifySuccess from '../../components/verifyEmail/VerifySuccess';
import { enqueueSnackbar } from 'notistack';

const Reset = () => {
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const user_id = searchParams.get('id');
  const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      
      try {
        if (pass!==cpass){
            enqueueSnackbar('Confirm password did not matched', { variant: 'error' });
            setLoading(false);
            return;
        }
        await newRequest.post('/auth/reset', { id: user_id, pass: pass });
        setLoading(false);
        navigate('/login');
        enqueueSnackbar('Password reset successfully. Now LOGIN here!', { variant: 'success' });
      } catch (err) {
        console.error(err);
        setLoading(false);
        // Handle the error, e.g., show an error message
      }
    };


  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <h1>Set new password</h1>
            <label htmlFor="">New Password</label>
            <input
            name="pass"
            type="password"
            required
            placeholder="Enter new password"
            onChange={(e) => setPass(e.target.value)}
            />

            <label htmlFor="">Confirm Password</label>
            <input
            name="cpass"
            type="password"
            required
            placeholder="Confirm password"
            onChange={(e) => setCpass(e.target.value)}
            />
            <button type="submit">{loading ? <Spinner /> : 'Reset Password'}</button>
        </form>
    </div>
  )
};

export default Reset;
