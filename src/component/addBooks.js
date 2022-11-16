import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addbooks.css';


const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [language, setLanguage] = useState('')
  const [rating, setRating] = useState('')

  let navigate = useNavigate();
 
  let handleSubmit = (e) =>{
    e.preventDefault()
    let data = {
      title,
      author,
      rating,
      language
    };

    fetch("http://localhost:2000/book",{
      method:'POST',
      headers:{"Content-Type": "application/json" },
      body: JSON.stringify(data),
      
    })
    alert("book added")
    navigate("/admin-portal/book-list")
  }
  let handleReset = () =>{
    setTitle('');
    setAuthor('');
    setLanguage('');
    setRating('');
  }
  return (
    <div className="addbooks">
      <h1>ADD BOOKS</h1>
      <div className="addbook-form">
      <form className="form" action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange = {(e)=>{setTitle(e.target.value)}}  value={title}/>

        <input type="text" placeholder="Author" onChange = {(e)=>{setAuthor(e.target.value)} } value={author}/>

        <input type="text" placeholder="Language" onChange = {(e)=>{ setLanguage(e.target.value) }}  value={language}/>

        <input type="number" placeholder="rating" onChange = {(e)=>{ setRating(e.target.value) }} value={rating} />
        <div className="addbook-btn">
       <button className="btn">Submit button</button>
        <button className="btn" type="reset" onClick={handleReset}>Reset</button>
       </div>
      </form>
      </div>
    </div>
  );
};

export default AddBook;
