function Form () {
    
    return (
      <div>
        <h3>New Book</h3>
        <form>
            <input placeholder="Title"></input>
            <br></br>
            <input placeholder="Author"></input>
            <br></br>
            <input placeholder="Image"></input>
            <br></br>
            <input placeholder="Rating" type="number"></input>
            <br></br>
            <input placeholder="Description"></input>
            <br></br>
            <button>Add New Book</button>
        </form>
      </div>
    )
  }
  
  export default Form