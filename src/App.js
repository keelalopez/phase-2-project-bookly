import React, {useState, useEffect,} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import './App.css';

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
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar />

      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>

        <Route path="/form">
          <Form elevatorNewBook={elevatorNewBook} />
        </Route>

        <Route exact path="/">
          <BookList
            books={filteredBooks}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;