const Header = () => {
    return (
      <>
        <div className="header">
          <div className="row1">
            <h1>BOOKLY </h1>
            <h3>
              Some books leave us free and <br /> Some books make us free{" "}
            </h3>
          </div>
          <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
              <input type="text" placeholder="Enter Your Book Name" />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {/* <img src="./images/Girl Reading.jpeg" alt="" /> */}
          </div>
        </div>
      </>
    );
  }
  
  export default Header