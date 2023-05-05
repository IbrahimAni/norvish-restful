import { useEffect } from "react";
import {BookTableJSON, Loading} from "./index";
import { fetchBooks } from "../../api";

const BookTable = ({fetch, setFetch, data, setData, setPages, setSwitchPage, onSelectBook}) => {
  const format = localStorage.getItem('format');


  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookData = await fetchBooks();
        setData(bookData);             
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    }

    if (!data.books || fetch == true) {
      fetchBookData();
      setFetch(false)
    }
  }, [data, setData]); 
  
  useEffect(() => {
    console.log('Data state updated:', data.books);
    setPages(data.counts || null);  
  }, [data]);

  const books = data.books || null;
  

  if (!data.books) {
    return <Loading />;
  }
console.log(format)
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
