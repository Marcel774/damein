
import { useState } from "react";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contacts from "./Contacts.jsx";

function App() {
  const [page, setPage] = useState("Home");
  const [count, setCount] = useState(0);

  const schoolName = "EAV Kivumu TSS";

  return (
    <div>
      <h1>Class Website</h1>

      <button onClick={() => setPage("Home")}>
        Home
      </button>

      <button onClick={() => setPage("About")}>
        About
      </button>

      <button onClick={() => setPage("Students")}>
        Students
      </button>

      <button onClick={() => setPage("Contact")}>
        Contact
      </button>

      <hr />

      {page === "Home" && (
        <Home schoolName={schoolName} />
      )}

      {page === "About" && <About />}

      {page === "Students" && <Students />}

      {page === "Contact" && <Contacts />}

      <hr />

      <h2>Click Counter</h2>

      <p>Number of clicks: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
