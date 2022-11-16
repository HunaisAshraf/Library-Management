import "../styles/adduser.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const AddUser = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault()
      let data = {
        name,
        phone,
        email
       
      };
      fetch("http://localhost:2000/user", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      alert("user added")
      navigate("/admin-portal/user-list")
    
  }
  const handleReset = () => {
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <div className="adduser">
      <form className="form" action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label> <br />
        <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />
        <label htmlFor="">Email:</label> <br />
        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email}  />
        <label htmlFor="">Phone:</label> <br />
        <input type="number" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} value={phone} />
       <div className="adduser-btn">
       <button className="btn">Submit button</button>
        <button className="btn" type="reset" onClick={handleReset}>Reset</button>
       </div>
      </form>
    </div>
  );
};

export default AddUser;
