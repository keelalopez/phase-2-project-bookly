function Search ({searchTerm, setSearchTerm}) {

  function handleSearch(e){
   setSearchTerm(e.target.value)
   console.log(e.target.value)

  }

    return (
      <div className="search">
        <input onChange={handleSearch} type="text" placeholder="Enter Your Book Name" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

    );
  }
  
  export default Search