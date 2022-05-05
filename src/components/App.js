import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  const url = "http://localhost:6001/listings/";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setListings(data));
  }, [])

  function handleDelete(listingId) {
    console.log("delete!");

    fetch(url + listingId, {
      method: 'DELETE',
    })
      .then(res => res.json()) 
      .then(res => console.log(res))

    setListings(listings.filter(listing => listing.id !== listingId));
  }

  function handleSubmitSearch(searchPhrase) {
    //console.log("submitted!");
    setSearch(searchPhrase);
  }

  let listingsToDisplay = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  })

  //console.log(listingsToDisplay.sort((a,b) => a.location.localeCompare(b.location)))

  listingsToDisplay = listingsToDisplay.sort((a,b) => a.location.localeCompare(b.location));

  return (
    <div className="app">
      <Header handleSubmitSearch={handleSubmitSearch} />
      <ListingsContainer
        listings={listingsToDisplay} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;