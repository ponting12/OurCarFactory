import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="container mt-5">
      <h2>Star Rating</h2>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}

      <h3 className="mt-3">Rating: {rating}</h3>
    </div>
  );
}

export default StarRating;