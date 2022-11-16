import BookCard from "./BookCard"


const BookList = ({books}) => {

    // let thumbnail =
    //   books.description.image && books.description.image.smallThumbnail;
  return (
    <div className="container">
      {books.map((book) => {
        return( 
        <BookCard book={book} key={book.id} />
        
        )
      })}
    </div>
  )
}

export default BookList;