import React, { useState } from "react";

function SearchBar() {
  c;
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    basket
      .filter((data) => {
        if (searchItem == "") {
          return data;
        } else if (
          data.title.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        return (
          <div key={data.id}>
            <img src={data.img} alt="#" />
            <h3>{data.title}</h3>
            <p>{data.price}</p>
          </div>
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchItem}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;
