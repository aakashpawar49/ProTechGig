import PuffLoader from "react-spinners/PuffLoader";
import React from 'react'

const Spinner = () => {
  return (
    <div className="spinner">
        <PuffLoader
            color="white"
            size={22}
            speedMultiplier={1.3}
        />
    </div>
  )
};
export default Spinner;