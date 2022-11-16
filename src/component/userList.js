import { useState } from "react";
import { useEffect } from "react";
import '../styles/userlist.css'

const UserList = () => {
    let [user, setUser] = useState([]);
    useEffect(() => {
        let fetchData = async () =>{
        let response = await fetch("http://localhost:2000/user");
        let resData = await response.json();
        setUser(resData)
        };
        fetchData();
    },[])

    let handleDelete = (id)=>{
        fetch(`http://localhost:2000/user/${id}`,{
          method: 'DELETE',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(user)
        })
        window.location.reload(); //reload the page
    }
  return (
    <div className="userlist">
      <div>
        <h1 className="title">User List</h1>
      </div>
      {user.map((data) => (
        <div className="user-list">
        <div className="usr-list">
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Phone : {data.phone}</p>
            <button onClick={()=>handleDelete(data.id)}>Delete</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
