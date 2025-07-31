import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import './App.css';
import Header from "../components/mainHeader";
import Footer from "../components/footer";
import Siderbar from "../components/siderbar";
// function Profile(props) {
// const navigate = useNavigate();
//   // const [searchParams] = useSearchParams();
//   // const name = searchParams.get("name");
//   // const age = searchParams.get("age");
//   const location = useLocation();
//   const {name, age} = location.state
//   const handleClick = () => {
//     navigate("/"); // Điều hướng đến trang About
//   };
//  console.log("first",name, age)
//  const initialAge = parseInt(location.state.age); 
//  const [count, setCount] = useState(initialAge);
//   return (
//     <div className="Profile">
//       <Header/>
//       <p>{name} - {age}</p><p>Tuổi: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Tăng</button>
      
//     </div>
//   );
// }

// export default Profile;
function About() {
  return (
    <div className="profile-container">
       <Header/>
       <Siderbar/>
      {/* <h1>Thông tin cá nhân</h1>
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="profile-avatar"
        />
        <div className="profile-details">
          <p><strong>Họ tên:</strong> Nguyễn Văn A</p>
          <p><strong>Email:</strong> nguyenvana@example.com</p>
          <p><strong>Giới tính:</strong> Nam</p>
          <p><strong>Ngày sinh:</strong> 01/01/2000</p>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}
export default About;