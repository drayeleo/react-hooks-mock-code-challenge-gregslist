import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {

  function buildListingsCards() {
    return listings.map(listing => {
      return <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete} />
    })
  }

  return (
    <main>
      <ul className="cards">
        {buildListingsCards()}
      </ul>
    </main>
  );
}

export default ListingsContainer;