import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(term) {
    setSearchTerm(term);
  }
  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
