import BookCard from "./BookCard";
// import Search from "./Search";
// import Girl-Reading from "./images/Girl-Reading";

const Header = ({searchTerm, setSearchTerm}) => {

  function handleSearch(e){
   setSearchTerm(e.target.value)
   console.log(e.target.value)

  }
    return (
      <>
        <div className="header">
          <div className="row1">
            <h1>BOOKLY</h1>
          </div>

          <div className="row2">
            <h2>
              Some books leave us free  <br /> Some books make us free
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

            <img src="./images/Girl-Reading.jpeg" alt="" />
          </div>
        </div>
      </>
    );
  }
       
  
  export default Header




