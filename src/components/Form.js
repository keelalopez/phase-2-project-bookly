import { useState } from "react"

function Form ({elevatorNewBook}) {
    // USE STATE TO TRACK NEW BOOK DETAILS
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    

    // HANDLE SUBMIT EVENT
    function handleSubmit (e) {
        e.preventDefault()
        
        // CREATES NEW BOOK OBJECT
        const newBook = {
            title: title,
            author: author,
            description: description,
            image: image,
            rating: rating
            // startDate: "",
            // "completed": true
        }

        fetch("http://localhost:3000/books", {
          headers: {"Content-Type": "application/json"},
          method: "POST",
          body: JSON.stringify(newBook)
        })
        .then(response => response.json())
        .then(elevatorNewBook(newBook))
    }
    
    return (
      <div>
        <h3>Add New Book</h3>
        <div className="form-box">
          <form>
            <input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Rating"
              type="number"
              onChange={(e) => setRating(e.target.value)}
            />
            <br></br>
            <input
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <button onClick={handleSubmit}>Add New Book</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Form