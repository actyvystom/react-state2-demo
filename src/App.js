import { useState } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";

export default function App() {
  // declare a state variable for our searchTerm
  const [searchTerm, setSearchTerm] = useState("");
  // declare a handler function which we can pass as a prop to our SearchForm component 
  function handleSearch(term) {
    // use the state setter for our searchTerm
    setSearchTerm(term);
  }
  return (
    <main>
      <h1>Search</h1>
    {/* we pass our state variable searchTerm and the handler function to our SearchForm component (when passing handler functions as props, we use the naming convention 'onXyc*')*/}
      <SearchForm searchTerm={searchTerm} onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
