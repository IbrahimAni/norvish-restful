
const Pagination = ({ pages }) => {
  if (!pages) {
    return null;
  }
  const handlePageClick = (number) => {
    console.log(number)
  };
  return (
    <div className="flex items-center">
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          className="mx-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-block"
          onClick={() => handlePageClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination