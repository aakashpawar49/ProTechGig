import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Enhanching <span>the</span> Tech <span>community</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "Game Creators"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={()=>navigate('/gigs?cat=web')}>Web Design</button>
            <button onClick={()=>navigate('/gigs?cat=data')}>Data Analysis</button>
            <button onClick={()=>navigate('/gigs?cat=soft')}>Software Developers</button>
            <button onClick={()=>navigate('/gigs?cat=cloud')}>Cloud Computing</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/coder4.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
