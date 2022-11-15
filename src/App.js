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

  const [searchTerm, setSearchTerm]= useState("")



  const [books, setBooks] = useState([])
  
  const URL = "http://localhost:3000"
  const bookURL = URL + "/books"
   useEffect(() => {
    fetch(bookURL)
    .then(response => response.json())
    .then(data => setBooks(data))
   }, [])

  return (
    <div className="App">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar />
      <Form />
      <BookList books={books} />
    </div>
  );
}

export default App;