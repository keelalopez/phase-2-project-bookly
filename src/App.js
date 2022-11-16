import React, {useState, useEffect,} from 'react';
// import { BrowserRouter } from “react-router-dom”
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Search from './components/Search';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import './App.css';
//import Search from './components/Search';

function App() {
  
  
  
  const [books, setBooks] = useState([])
  
  const URL = "http://localhost:3000"
  const bookURL = URL + "/books"
  useEffect(() => {
    fetch(bookURL)
    .then(response => response.json())
    .then(data => setBooks(data))
  }, [])
  
  const [searchTerm, setSearchTerm]= useState("")
  const filteredBooks = books.filter((book) => {
    return (book.title.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  // ELEVATOR FUNCTION TO RENDER NEW BOOK
  function elevatorNewBook (newBookObj) {
    setBooks([...books, newBookObj])
  }
  
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Form elevatorNewBook={elevatorNewBook}/>
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;