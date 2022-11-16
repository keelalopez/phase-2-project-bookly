import BookDetails from "./BookDetails"

const BookCard = ({book}) => {
  function handleClick () {
    console.log({book})
    // return <BookDetails book={book}/>
  }

  return (
    <div className="card">
      <img 
        src = {book.image} 
        alt={book.title}
        onClick={handleClick}
        />
    </div>
  )
  }
  
  export default BookCard;