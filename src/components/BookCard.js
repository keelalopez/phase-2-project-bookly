const BookCard = ({book}) => {


    return (
      <div className="card">
        <img src = {book.image} alt={book.title}/>
      </div>
    )
  }
  
  export default BookCard;