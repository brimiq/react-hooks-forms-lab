import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items"; // <-- your data file

function App() {
  const [items, setItems] = useState(itemsData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleAddItem(newItem) {
    // Use spread operator to add a new item immutably
    setItems([...items, newItem]);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      {/* Pass the dark mode toggle callback to Header */}
      <Header onDarkModeClick={handleDarkModeClick} />

      {/* Pass both the items array and the add-item callback to ShoppingList */}
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;
