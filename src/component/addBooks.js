import '../styles/addbooks.css'


const AddBook = () => {
  return (
    <div className="addbooks">
      <h1>ADD BOOKS</h1>
      <div className="addbook-form">
      <form className="form" action="">
        <input type="text" placeholder="Title" />

        <input type="text" placeholder="Author" />

        <input type="text" placeholder="Languagr" />

        <input type="text" placeholder="rating" />
        <button className="btn">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default AddBook;
