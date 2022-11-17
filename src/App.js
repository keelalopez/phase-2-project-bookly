import React, {useState, useEffect,} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import RandomQuote from './components/RandomQuote';
import './App.css';
import { ListItem } from '@mui/material';

function App() {

  // FETCHES DATA AND STORES IN STATE VARIABLE.
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
    return (book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  // ELEVATOR FUNCTION TO RENDER NEW BOOK
  function elevatorNewBook (newBookObj) {
    setBooks([...books, newBookObj])
  }

  //ADDED DROP DOWN TO FILTER THROUGH COMPLETED AND NON
  const [selected, setSelected] = useState("All")
  function handleDropDownChange (e) {
    if (e.target.value === "Completed") return setSelected(true)
    if (e.target.value === "Not Completed") return setSelected(false)
    if (e.target.value === "All") return setSelected("All")
  }
  
  const booksCompletion = filteredBooks.filter((book) => {
    if (selected === "All") return true
    return book.completed == selected
  })

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar handleDropDownChange={handleDropDownChange}/>

      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>

        <Route path="/form">
          <Form elevatorNewBook={elevatorNewBook} />
        </Route>

        <Route path="/quote">
          <RandomQuote />
        </Route>

        <Route exact path="/">
          <BookList
            books={booksCompletion}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;