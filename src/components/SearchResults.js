const topics = [
  "react",
  "render",
  "JSX",
  "component",
  "declarative",
  "string interpolation",
  "nesting",
  "children prop",
  "Fragment",
  "composition",
  "application design",
  "create-react-app",
  "project scaffolding",
  "bundler",
  "transpilation",
  "npm dependencies",
  "npm scripts",
  "state",
  "useState",
  "re-render",
  "onClick",
  "set function",
  "map",
  "array",
  "key prop",
  "unique identifier",
  "keyed fragment",
];

export default function SearchResults({ searchTerm }) {
  // use the filter array method to find the searchTerm in our topics array and store it in results variable
  const results = topics.filter((topic) => topic.includes(searchTerm));

  if (!searchTerm || !results.length) {
    return <p>No results</p>;
  }

  return (
    <ul>
    {/* use map array method to display the list of search results found for our searchTerm */}
      {results.map((result) => (
        <li key={result}>{result}</li>
      ))}
    </ul>
  );
}
