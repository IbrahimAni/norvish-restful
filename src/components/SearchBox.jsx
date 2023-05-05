import {useState} from "react";
import { searchBook } from "../../api";

const SearchBox = ({setData, setSwitchPage}) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await searchBook(searchValue);
      console.log("Search results:", results);
      setData(results)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    setSearchValue("")
    setSwitchPage("books")
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <form action="search" method="GET" style={{ display: 'flex', flexGrow: 1 }} onSubmit={handleSubmit}>
      <input
        type="search"
        style={{
          flexGrow: 1,
          border: '1px solid #cfd8dc',
          borderRadius: '3px 0 0 3px',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          fontWeight: 400,
          lineHeight: 1.6,
          color: '#5c6b73',
          backgroundColor: '#ffffff',
          transition: 'all 0.2s ease-in-out',
          outline: 'none',
          marginRight: '-1px',
        }}
        placeholder="Search"
        aria-label="Search"
        name="search"
        id="search-input"
        value={searchValue}
        onChange={handleChange}
      />
      <button
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0 3px 3px 0',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#ffffff',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          transition: 'all 0.15s ease-in-out',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        type="submit"
        className="bg-blue-500"
        id="search-button"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ height: '20px', width: '20px' }}
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  )
}

export default SearchBox