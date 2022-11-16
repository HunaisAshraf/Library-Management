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
    if (!name && !phone && !email) {
     
    } else {
      let data = {
        name,
        phone,
        email
       
      };
      fetch("http://localhost:1000/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
    }
  }
  const handleReset = () => {
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <div className="adduser">
      <form className="form" action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} />

        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email}  />

        <input type="text" placeholder="Phone" onChange={(e) => { setPhone(e.target.value) }} value={phone} />
        <button className="btn">Submit</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default AddUser;
