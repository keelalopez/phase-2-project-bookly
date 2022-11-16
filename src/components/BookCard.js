

const BookCard = ({book}) => {
  function handleClick () {
    console.log(book.title)
    
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