import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import './App.css';


function Profile(props) {
const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const name = searchParams.get("name");
  // const age = searchParams.get("age");
  const location = useLocation();
  const {name, age} = location.state
  const handleClick = () => {
    navigate("/"); // Điều hướng đến trang About
  };
 console.log("first",name, age)
 const initialAge = parseInt(location.state.age); 
 const [count, setCount] = useState(initialAge);
  return (
    <div className="Profile">
      <p>{name} - {age}</p><p>Tuổi: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      
    </div>
  );
}

export default Profile;