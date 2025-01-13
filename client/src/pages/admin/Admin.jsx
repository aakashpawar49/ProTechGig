import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import newRequest from '../../utils/newRequest';
import AdminLogin from './AdminLogin';
// import { Link } from 'react-router-dom';


const Admin = () => {
    const [isLogin, setIsLogin] = useState(false);


    const queryClient = useQueryClient();
  
    const { isLoading, error, data } = useQuery({
      queryKey: ["admin"],
      queryFn: () =>
        newRequest.get(`/gigs`).then((res) => {
          console.log("res.data: ", res);
          return res.data;
        }),
    });
  
    const mutation = useMutation({
      mutationFn: (id) => {
        return newRequest.delete(`/gigs/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["admin"]);
      },
    });
  
    const handleDelete = (id) => {
      mutation.mutate(id);
    };
  
    return isLogin ? (
      <div className="myGigs">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="container">
            <h1><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' target="_blank">View Queries</a></h1>
            <div className="title">
              <h1>All Gigs</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((gig) => (
                  <tr key={gig._id}>
                    <td>
                      <img className="image" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>
                      <img
                        className="delete"
                        src="./img/delete.png"
                        alt=""
                        onClick={() => handleDelete(gig._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    ) : <AdminLogin setL={setIsLogin} />
  }

  export default Admin;