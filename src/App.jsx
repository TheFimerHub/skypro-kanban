import { useState } from "react";

import Header from "./сomponents/Header/Header.jsx";
import PopBrowse from "./сomponents/PopBrowse/PopBrowse.jsx";
import PopNewCard from "./сomponents/PopNewCard/PopNewCard.jsx";
import PopUser from "./сomponents/PopUser/PopUser.jsx";
import Main from "./сomponents/Main/Main.jsx";
import Column from "./сomponents/Column/Column.jsx";

import { data } from "./data.js";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      {/* модалки */}
      <PopBrowse />
      <PopNewCard />
      <PopUser />

      <Header />

      {/* основное содержимое */}
      <Main>
        {data.map((column) => (
          <Column key={column.id} title={column.title} cards={column.cards} />
        ))}
      </Main>
    </div>
  );
}

export default App;
