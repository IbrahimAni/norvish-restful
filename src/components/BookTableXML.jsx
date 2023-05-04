

const BookTableXML = () => {
  return (
    <div>BookTableXML</div>
  )
}

export default BookTableXML
// import { useState, useEffect } from 'react';
// import XMLParser from 'react-xml-parser';
// import { useCallback } from "react";
// import { handleViewButtonClick } from "./function";
// import xml2js from 'xml2js';

// const BookTableXML = async ({xmlData, onSelectBook, setSwitchPage}) => {
//   const [books, setBooks] = useState([]);
//   const [counts, setCounts] = useState([]);

//   const handleView = useCallback((id) => {
//     handleViewButtonClick(id, onSelectBook);
//     setSwitchPage("view")
//   }, [onSelectBook, setSwitchPage]);

//   // const xml = new XMLParser().parseFromString(JSON.stringify(xmlData));
//   // console.log(xml);
//   // const books = xml.getElementsByTagName('Book');

//   const convertXmlToJson = async (xmlData) => {
//     const parser = new xml2js.Parser();
//     const result = await parser.parseStringPromise(xmlData);
//     return result;
//   };

//   convertXmlToJson(xmlData)
//   .then((jsonObject) => {
//     console.log(jsonObject);
//   })
//   .catch((error) => {
//     console.error('Error converting XML to JSON:', error);
//   });

//   return (
//     <table className="table-auto">
//       <thead>
//         <tr className="bg-gray-200 text-gray-900">
//           <th className="w-1/6 py-1">Title</th>
//           <th className="w-1/6 py-1">Author</th>
//           <th className="w-1/6 py-1">Date</th>
//           <th className="w-1/6 py-1">Genres</th>
//           <th className="w-1/6 py-1">Characters</th>
//           <th className="w-1/6 py-1">Synopsis</th>
//           <th className="w-1/6 py-1">Action</th>
//         </tr>
//       </thead>
//       <tbody className="text-center">
//         {books.map((book) => (
//           <tr key={book.id}>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.title}</div>
//             </td>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.author}</div>
//             </td>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.date}</div>
//             </td>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.genres}</div>
//             </td>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.characters}</div>
//             </td>
//             <td className="border py-2">
//               <div className="w-32 truncate text-center">{book.synopsis}</div>
//             </td>
//             <td className="border py-2 bg-blue-500 text-white font-semibold px-3 rounded inline-block cursor-pointer" onClick={() => handleView(book.id)}>              
//               View
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>



//     // <table className="table-auto">
//     //   <thead>
//     //     <tr className="bg-gray-200 text-gray-900">
//     //       <th className="w-1/6 py-1">Title</th>
//     //       <th className="w-1/6 py-1">Author</th>
//     //       <th className="w-1/6 py-1">Date</th>
//     //       <th className="w-1/6 py-1">Genres</th>
//     //       <th className="w-1/6 py-1">Characters</th>
//     //       <th className="w-1/6 py-1">Synopsis</th>
//     //       <th className="w-1/6 py-1">Action</th>
//     //     </tr>
//     //   </thead>
//     //   <tbody className="text-center">
//     //     {books.map((book) => {
//     //       const id = book?.attributes?.id;
//     //       if (!id) return null;
//     //       return(            
//     //         <tr key={id}>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[0].value}</div>
//     //           </td>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[1].value}</div>
//     //           </td>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[2].value}</div>
//     //           </td>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[3].value}</div>
//     //           </td>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[4].value}</div>
//     //           </td>
//     //           <td className="border py-2">
//     //             <div className="w-32 truncate text-center">{book.children[5].value}</div>
//     //           </td>
//     //           <td className="border py-2 bg-blue-500 text-white font-semibold px-3 rounded inline-block cursor-pointer" onClick={() => handleView(id)}>              
//     //               View
//     //           </td>
//     //         </tr>
//     //       )})}
//     //   </tbody>
//     // </table>
//   )
// }

// export default BookTableXML