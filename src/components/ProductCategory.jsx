
const ProductCategory = ({setSwitchPage, setFetch}) => {
  const getAllBooks = () => {
    setSwitchPage("books")
    setFetch(true)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 cursor-pointer" onClick={getAllBooks}>         
            <img
              src="https://via.placeholder.com/150/92c952"
              alt="Books Category"
              className="w-16 h-16 object-cover object-center rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Books</h3>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductCategory