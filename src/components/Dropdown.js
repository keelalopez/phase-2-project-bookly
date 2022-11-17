
function Dropdown ({handleDropDownChange}) {
    return (
        <select name="Filter" onChange={handleDropDownChange}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
    )
}

export default Dropdown;