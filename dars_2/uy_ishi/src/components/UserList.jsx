import React, { useState, useEffect } from "react";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all"); // "all" or "favorite"
  const [favorites, setFavorites] = useState([]);

  const users = [
    { id: 1, fullName: "Diyor" },
    { id: 2, fullName: "Shoxrux" },
    { id: 3, fullName: "Baxtiyor" },
    { id: 4, fullName: "Mansur" },
  ].sort((a, b) => a.fullName.localeCompare(b.fullName));

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchSearch = user.fullName
      .toLowerCase()
      .includes(search.toLowerCase());
    const isFav = favorites.includes(user.id);
    if (category === "favorite") return matchSearch && isFav;
    return matchSearch;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by full name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("favorite")}>Favorite</button>
      </div>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.fullName}
            <button onClick={() => toggleFavorite(user.id)}>
              {favorites.includes(user.id) ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
