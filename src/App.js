import React, {useState, useEffect,} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Search from './components/Search';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import './App.css';


function App() {

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
      <NavBar />
      <Form />
      <Search />
      <BookList books={books}/>
    </div>
  );
}

export default App;