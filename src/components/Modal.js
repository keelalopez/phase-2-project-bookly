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
              </div>
            </div>
          </div>
        </div>
      </>
  
    );

    
}


export default Modal;