import React from "react";
import Search from "./Search";

function Header({ handleSubmitSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmitSearch={handleSubmitSearch} />
    </header>
  );
}

export default Header;