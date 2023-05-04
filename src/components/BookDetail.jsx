import { useState, useEffect } from 'react';
import { fetchBook, deleteBook  } from '../../api';
import {Loading} from "./index.js"

const BookDetail = ({bookId, setSwitchPage, setDeleted}) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const fetchedBook = await fetchBook(bookId);
        setBook(fetchedBook);
        setLoading(false);        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleUpdate = (id) => {
    // Perform the update action here
    console.log('Update book with id:', id);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteBook(id);
      console.log('Book deleted successfully:', result);

      // Redirect or perform any other action after successful deletion
      setSwitchPage("books");
      setDeleted(true);
    } catch (error) {
      console.error('Error deleting book:', error);
      // Handle the error, display a message, or perform any other action as required
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!book) {
    return <div>No book details found</div>;
  }

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-full min-h-screen">
      <div className="book-details flex items-start justify-between">
        <div className="book-cover w-1/4">
          <img
            src={`https://picsum.photos/seed/${book.id}/480/720`}
            alt="Sample book cover"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="book-info w-3/4 pl-8">
          <div className="buttons mb-2 ml-auto">
            {/* Replace the hrefs with the appropriate actions or navigation links */}
            <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 mr-4 rounded"
          onClick={() => handleUpdate(book.id)}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded"
          onClick={() => handleDelete(book.id)}
        >
          Delete
        </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-lg mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-lg mb-2">
            <strong>Date:</strong> {book.date}
          </p>
          <p className="text-lg mb-2">
            <strong>Genres:</strong> {book.genres}
          </p>
          <p className="text-lg mb-2">
            <strong>Characters:</strong> {book.characters}
          </p>

          <p className="text-lg mb-2">
            <strong>Synopsis:</strong>
          </p>
          <p className="text-base w-full">{book.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail