import SearchBox from "./SearchBox"
// import { reset } from "./function";

const Header = ({setData, setSwitchPage, setSelectedBookId}) => {
  const handleAddBook = () => {
    // Your logic for handling the add book action
    console.log("Clicked")
    setSelectedBookId(null)
    setSwitchPage('add')
    // reset()
  };
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '1rem',
          width: '100%',
        }}
      >
        <SearchBox setSwitchPage={setSwitchPage} setData={setData} />
        {/* Add any content or child components inside this div */}
        <button
          onClick={handleAddBook}
          className="bg-blue-500 text-white font-semibold py-2 px-4 ml-4 rounded"
        >
          Add Book
        </button>
      </div>
    </div>
  )
}

export default Header