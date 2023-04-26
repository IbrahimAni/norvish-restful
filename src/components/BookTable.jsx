import {BookTableJSON, BookTableXML, BookTableText} from "./index";

const BookTable = ({setSwitchPage}) => {
  const books = [
    {
      id: 1,
      title: 'Book 1 JSON',
      author: 'Author 1',
      date: '2021-10-01',
      genres: 'Fiction',
      characters: 'John, Jane',
      synopsis: 'A short description of the book',
    },
    {
      id: 2,
      title: 'Book 2 JSON',
      author: 'Author 2',
      date: '2021-10-01',
      genres: 'Fiction',
      characters: 'John, Jane',
      synopsis: 'A short description of the book',
    },
    // more book objects
  ];

  const xmlData = `
  <books>
    <book id="1">
      <title>Book 1 XML</title>
      <author>Author 1</author>
      <date>2021-10-01</date>
      <genres>Fiction</genres>
      <characters>John, Jane</characters>
      <synopsis>A short description of the book</synopsis>
    </book>
    <book id="2">
      <title>Book 2 XML</title>
      <author>Author 2</author>
      <date>2021-10-01</date>
      <genres>Fiction</genres>
      <characters>John, Jane</characters>
      <synopsis>A short description of the book</synopsis>
    </book>
    <!-- more book elements -->
  </books>
`;

const textData = `
ID: 1
Title: Book 1 Text
Author: Author 1
Date: 2021-10-01
Genres: Fiction
Characters: John, Jane
Synopsis: A short description of the book

ID: 2
Title: Book 2 Text
Author: Author 2
Date: 2021-10-01
Genres: Fiction
Characters: John, Jane
Synopsis: A short description of the book
`;

  const format = localStorage.getItem('format');

  switch (format) {
    case 'JSON':
      return(
        <BookTableJSON books={books} setSwitchPage={setSwitchPage} />
      )
    case 'XML':
      return(
        <BookTableXML xmlData={xmlData} setSwitchPage={setSwitchPage} />
      )
    case 'Text':
      return(
        <BookTableText textData={textData} setSwitchPage={setSwitchPage} />
      )
    default:
      return <div>No data to display</div>;
  }
  
}

export default BookTable