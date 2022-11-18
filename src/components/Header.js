import BookCard from "./BookCard";
 import GirlReading from "../images/Girl-Reading.jpeg";

  const Header = ({searchTerm, setSearchTerm}) => {


  function handleSearch(e){
   setSearchTerm(e.target.value)

  }
    return (
      <>
        <div className="header">
          <div className="row1">
            <h1>BOOKLY</h1>
          </div>

          <div className="row2">
            <h2>
              Some books leave us free <br /> and some books make us free
            </h2>
          </div>

          <div className="row3">
            <h3>Find Your Book</h3>
            <div className="search">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Enter Your Book Name"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
       
  
  export default Header




