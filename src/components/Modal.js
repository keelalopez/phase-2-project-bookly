// import BookCard from "./BookCard";


const Modal =({books,setShowModal})=>{
    return (
      <>
        <div className="overlay">
          <div className="overlay-inner">
            <button onClick={()=>setShowModal(false)} className="close">
              <i className="fa-sharp fa-solid fa-square-xmark"></i>
            </button>
            <div className="inner-box">
              <img src={books.image} alt={books.title} />
              <div className="info">

                <h1>{books.title}</h1>
                <h3>{books.author}</h3>
                <br />
                <h4>{books.description}</h4>
              </div>
            </div>
          </div>
        </div>
      </>
  
    );

    
}


export default Modal;