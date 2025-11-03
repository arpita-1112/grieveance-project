import React, { useState, useEffect } from "react";
import GrievanceForm from "./components/GrievanceForm";
import GrievanceList from "./components/GrievanceList";
import "./App.css";

function App() {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("grievances")) || [];
    setGrievances(saved);
  }, []);

  const addGrievance = (g) => {
    const updated = [...grievances, g];
    setGrievances(updated);
    localStorage.setItem("grievances", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <header>
        <h1>Grievance Cell Portal</h1>
      </header>
      <main>
        <section className="form-section">
          <h2>Submit Your Grievance</h2>
          <GrievanceForm onSubmit={addGrievance} />
        </section>
        <section className="list-section">
          <h2>Submitted Grievances</h2>
          <GrievanceList grievances={grievances} />
        </section>
      </main>
      <footer>
        <p>© 2025 Grievance Cell | MCA Minor Project</p>
      </footer>
    </div>
  );
}

export default App;
