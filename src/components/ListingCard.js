import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {
  const [starred, setStarred] = useState(false);

  function handleClickStar() {
    setStarred(!starred);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {starred ? (
          <button className="emoji-button favorite active" onClick={handleClickStar} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickStar} >☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing.id)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;