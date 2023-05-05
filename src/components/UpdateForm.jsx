import { useState, useEffect } from "react";
import {Loading} from "./index";
import { fetchBook, updateBook } from "../../api";

const UpdateForm = ({selectedBookId, setUpdated, setSwitchPage}) => {  
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const fetchedBook = await fetchBook(selectedBookId);
        setBook(fetchedBook);
        setLoading(false);        
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [selectedBookId]);

  const [formData, setFormData] = useState({
    id: book?.id || selectedBookId,
    title: book?.title || "",
    author: book?.author || "",
    date: book?.date || "",
    genres: book?.genres || "",
    characters: book?.characters || "",
    synopsis: book?.synopsis || "",
  });

  useEffect(() => {
    if(book){
      setFormData({
        id: selectedBookId,
        title: book.title,
        author: book.author,
        date: book.date,
        genres: book.genres,
        characters: book.characters,
        synopsis: book.synopsis,
      });
      }
  }, [book]);
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBook = await updateBook(selectedBookId, formData);
      console.log("Book Updated:", updatedBook);
      setUpdated(true);
    } catch (error) {
      console.error("Error adding book:", error);
    }
    setSwitchPage("view")
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">
          Update Book
        </h2>
        <input
          type="text"
          id="id"
          name="id"
          className="w-full border rounded-lg p-2"
          value={formData.id}
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
              value={formData.title}
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
            value={formData.author}
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
            value={formData.date}
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
            value={formData.genres}
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
          value={formData.characters}
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
        value={formData.synopsis}
        onChange={handleChange}
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
    >
      Update Book
    </button>
      </form>
    </>
  )
}

export default UpdateForm