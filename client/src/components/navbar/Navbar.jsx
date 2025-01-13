import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import { enqueueSnackbar } from "notistack";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
      enqueueSnackbar("Successfully logged out", { variant: 'success' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">ProTechGig</span>
          </Link>
        </div>
        <div className="links">
          {!currentUser?.isSeller && <span></span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
          <Link className="link menuLink" to="/gigs?cat=web">
              Website Developers
            </Link>
            <Link className="link menuLink" to="/gigs?cat=app">
              App Craftsmen
            </Link>
            <Link className="link menuLink" to="/gigs?cat=game">
              Game Creators
            </Link>
            <Link className="link menuLink" to="/gigs?cat=ai">
              AI Visionaries
            </Link>
            <Link className="link menuLink" to="/gigs?cat=data">
              Data Analyst
            </Link>
            <Link className="link menuLink" to="/gigs?cat=uix">
              UI/UX Developers
            </Link>
            <Link className="link menuLink" to="/gigs?cat=dev">
              DevOPs Engineers
            </Link>
            <Link className="link menuLink" to="/gigs?cat=cloud">
              Cloud Wizards
            </Link>
            <Link className="link menuLink" to="/gigs?cat=cyber">
              Cyber Guardians
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}
export default Navbar;