import React, { useState } from "react";

function Search({ handleSubmitSearch }) {
  const [searchPhrase, setSearchPhrase] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearch(searchPhrase);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;