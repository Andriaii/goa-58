
import React, { useMemo, useState } from "react";

const names = [
  "Andria",
  "Mariam",
  "Nino",
  "Giorgi",
  "Ana",
  "Dato",
  "Sandro",
  "Lika"
];

function NameFilter() {
  const [search, setSearch] = useState("");

  const filteredNames = useMemo(() => {
    console.log("Filtering"); // გაშვდება მხოლოდ search–ის ცვლილებისას
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search name..."
        className="border px-3 py-1 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-disc ml-5">
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameFilter;
