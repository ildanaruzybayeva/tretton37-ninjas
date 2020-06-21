import React from "react";

function FilterTool(props) {
  return (
    <form className="FilterTool">
      <label>Choose office </label>
      <select value={props.value} onChange={props.chooseOffice} title="select">
        <option value="All">All</option>
        <option value="Lund">Lund</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Helsingborg">Helsingborg</option>
        <option value="Borlänge">Borlänge</option>
        <option value="Ljubljana">Ljubljana</option>
      </select>
    </form>
  );
}

export default FilterTool;
