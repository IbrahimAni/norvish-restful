import { useEffect, useState } from "react";
import {BookTableJSON, BookTableXML, BookTableText, Loading} from "./index";
import { fetchBooks } from "../../api";
// import xmljs from 'xml-js';

const BookTable = ({setPages, setSwitchPage, onSelectBook}) => {
  const format = localStorage.getItem('format');

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookData = await fetchBooks();
        setData(bookData);             
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    }

    fetchBookData()
  }, []);  
  
  useEffect(() => {
    console.log('Data state updated:', data.books);
    setPages(data.counts || null);  
  }, [data]);

  const books = data.books || null;
  

  if (!data.books) {
    return <Loading />;
  }

  switch (format) {
    case 'json':
      return(
        <BookTableJSON jsonData={books} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} />
      )
    case 'xml':
      return(
        <BookTableJSON jsonData={books} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} />
      )
    case 'text':
      return(
        <BookTableJSON jsonData={books} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} />
      )
    default:
      return <div>No data to display</div>;
  }
  
}

export default BookTable

        {/* <BookTableXML xmlData={books} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} /> */}
        // <BookTableText textData={books} setSwitchPage={setSwitchPage} onSelectBook={onSelectBook} />
