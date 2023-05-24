export default function SearchForm({ searchTerm, onSearch }) {
  // declare handler function for our form submit event
  function handleSubmit(event) {
    // prevent default form submit action
    event.preventDefault();
    /* Alternative to get the value from our form element
    // const formElements = event.target.elements;
    // formElements.searchTerm.value;
    */
    const newData = new FormData(event.target);
    const data = Object.fromEntries(newData);
    onSearch(data.searchTerm);
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" required />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
