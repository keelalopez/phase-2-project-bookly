import BookCard from "./BookCard"

const BookList = ({books}) => {
  return (
    <div>
      {books.map((book) => {
        return( 
        <BookCard book={book} key={book.id} />
    
        
        )
      })}
    </div>
  )
}

export default BookList;