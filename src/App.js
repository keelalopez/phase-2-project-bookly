import React, {useState, useEffect,} from 'react';
import {  Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Search from './components/Search';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookDetails from './components/BookDetails';
import './App.css';
//import Search from './components/Search';

function App() {
  // FETCHES DATA AND STORES IN STATE VARIABLE
  const [books, setBooks] = useState([])
  
  const URL = "http://localhost:3000"
  const bookURL = URL + "/books"
  useEffect(() => {
    fetch(bookURL)
    .then(response => response.json())
    .then(data => setBooks(data))
  }, [])
  
  // SAVES SEARCHED STRING AND FILTERS
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
      
      <Route exact path="/form">
        <Form elevatorNewBook={elevatorNewBook}/>
      </Route>

      <Route exact path="/testing">
        <BookList books={filteredBooks} />
      </Route>
    </div>
  );
}

export default App;