import React, { useState } from "react";

const SearchBar = () => {
  // State to hold user input values
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Sorting options object with API values
  const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  // State to hold selected sorting option
  const [selectedSortOption, setSelectedSortOption] = useState("Best Match");

  // Function to handle search button click
  const handleSearch = () => {
    // Implement your logic to communicate with the Yelp API using the user input and sorting option
    console.log("Search Term:", searchTerm);
    console.log("Location:", location);
    console.log("Selected Sort Option:", sortingOptions[selectedSortOption]);
    // Add API communication logic here
  };

  return (
    <div>
      <div>
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
      </div>
      {/* Search inputs */}
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Sorting options */}
      <ul>
        {Object.entries(sortingOptions).map(([key, value]) => (
          <li key={value} onClick={() => setSelectedSortOption(key)}>
            {key}
          </li>
        ))}
      </ul>

      {/* Search button */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
