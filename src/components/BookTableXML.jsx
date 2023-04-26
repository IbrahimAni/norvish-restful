import XMLParser from 'react-xml-parser';

const BookTableXML = ({xmlData, setSwitchPage}) => {
  const switchPage = () => {
    setSwitchPage("view")
  }

  const xml = new XMLParser().parseFromString(xmlData);
  const books = xml.getElementsByTagName('book');
  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-900">
          <th className="w-1/6 py-1">Title</th>
          <th className="w-1/6 py-1">Author</th>
          <th className="w-1/6 py-1">Date</th>
          <th className="w-1/6 py-1">Genres</th>
          <th className="w-1/6 py-1">Characters</th>
          <th className="w-1/6 py-1">Synopsis</th>
          <th className="w-1/6 py-1">Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {books.map((book) => (
          <tr key={book.id}>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[0].value}</div>
            </td>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[1].value}</div>
            </td>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[2].value}</div>
            </td>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[3].value}</div>
            </td>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[4].value}</div>
            </td>
            <td className="border py-2">
              <div className="w-32 truncate text-center">{book.children[5].value}</div>
            </td>
            <td className="border py-2 bg-blue-500 text-white font-semibold py-1 px-3 rounded inline-block cursor-pointer" onClick={switchPage}>              
                View
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTableXML