import { useEffect, useState } from "react";
import {addBook, fetchBook as fetchBookById} from "../../api"
import { generateIntegerID,  } from "./function";
import {Notification} from "./index";

const Form = ({bookId}) => {
  const [added, setAdded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBookDetails  = async () => {
      if (bookId) {
        const fetchedBook = await fetchBookById(bookId);
        setBook(fetchedBook);
      }
    };
    fetchBookDetails ();
  }, [bookId]);

  const [formData, setFormData] = useState({
    id: book ? book.id : "",
    title: book ? book.title : "",
    author: book ? book.author : "",
    date: book ? book.date : "",
    genres: book ? book.genres : "",
    characters: book ? book.characters : "",
    synopsis: book ? book.synopsis : "",
  });

  const resetForm = () => {
    setFormData({
      id: "",
      title: "",
      author: "",
      date: "",
      genres: "",
      characters: "",
      synopsis: "",
    });
  };      
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = book ? formData.id : generateIntegerID();

    const newFormData = {
      ...formData,
      id,
    };
    try {
      const addedBook = await addBook(newFormData);
      console.log("Book added:", addedBook);
      resetForm(setFormData);
      setAdded(true);
    } catch (error) {
      console.error("Error adding book:", error);
  
    }
  };

  const dismissNotification = () => {
    // Reset the deleted state when the notification is dismissed
    setAdded(false);
    setUpdated(false);
  };

  return (
  <>
    {added && <Notification message="Book Added successfully." duration={3000} onDismiss={dismissNotification} />}
    {updated && <Notification message="Book Updated successfully." duration={3000} onDismiss={dismissNotification} />}
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        {book ? "Update Book" : "Add Book"}
      </h2>
      <input
        type="text"
        id="id"
        name="id"
        className="w-full border rounded-lg p-2"
        value={book.id}
        hidden={true}
        readOnly
      />
      <div className="flex items-start justify-between mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded-lg p-2"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="author" className="block mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full border rounded-lg p-2"
            placeholder="Author Name"
            value={book.author}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-start justify-between mb-4">
        <div className="w-1/2 mr-2">
          <label htmlFor="date" className="block mb-2">
            Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            className="w-full border rounded-lg p-2"
            placeholder="Date"
            value={book.date}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="genres" className="block mb-2">
            Genres
          </label>
          <input
            type="text"
            id="genres"
            name="genres"
            className="w-full border rounded-lg p-2"
            placeholder="Fiction, Adventure, Mystery"
            value={book.genres}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="characters" className="block mb-2">
          Characters
        </label>
        <input
          type="text"
          id="characters"
          name="characters"
          className="w-full border rounded-lg p-2"
          placeholder="Alice, Bob, Charlie, Dave"
          value={book.characters}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
      <label htmlFor="synopsis" className="block mb-2">
        Synopsis
      </label>
      <textarea
        id="synopsis"
        name="synopsis"
        className="w-full border rounded-lg p-2"
        placeholder="Write a short synopsis of the book"
        rows="4"
        value={book.synopsis}
        onChange={handleChange}
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
    >
      {book ? "Update Book" : "Add Book"}
    </button>
</form>
</>
  )
}

export default Form;