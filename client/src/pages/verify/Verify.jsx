
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import newRequest from '../../utils/newRequest';
// import Spinner from '../../components/Spinner';
// import VerifySuccess from '../../components/verifyEmail/VerifySuccess';


// const Verify = async () => {
//     // const navigate = useNavigate();
//     const [searchParams] = useSearchParams();
//     const [loading, setLoading] = useState(false);
//     const user_id = searchParams.get('id');
//     setLoading(true);
//     useEffect(async () => {
//       // Perform your asynchronous or side-effect work here
//       const res = await newRequest.post('/auth/verify', {id: user_id});
//         // Update the state within the useEffect
//         setLoading(false);
      
//     }, []);
//     // try{
        
//     //     const res = await newRequest.post('/auth/verify', {id: user_id});
//     //     setLoading(false);
//     // }catch(err){
//     //     console.log(err);
//     //     setLoading(false);
//     // }
//     return loading ? <Spinner /> : <VerifySuccess />
//   // return (
//   //   <div>
//   //     {loading ? <Spinner /> : 
//       // <>
//       //   <h3>Your email id has been successfully verified.</h3>
//       //   <button onClick={()=>{navigate('/login')}}>Login Now</button>
//       // </>
//   //     }
//   //   </div>
//   // )
// }

// export default Verify;







import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import Spinner from '../../components/Spinner';
import VerifySuccess from '../../components/verifyEmail/VerifySuccess';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const user_id = searchParams.get('id');

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await newRequest.post('/auth/verify', { id: user_id });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
        // Handle the error, e.g., show an error message
      }
    };

    verifyUser(); // Call the async function inside useEffect
  }, [user_id]); // Add user_id as a dependency to re-run the effect when it changes

  return loading ? <Spinner /> : <VerifySuccess />;
};

export default Verify;
