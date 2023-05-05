import { useState } from "react";
import { generateIntegerID,  } from "./function";
import { addBook } from "../../api";
import { Notification } from "./index"

const AddForm = () => {
  const [added, setAdded] = useState(false);
  const [formData, setFormData] = useState({
    id: generateIntegerID(),
    title: "",
    author: "",
    date: "",
    genres: "",
    characters: "",
    synopsis: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedBook = await addBook(formData);
      console.log("Book added:", addedBook);
      setAdded(true);
      resetForm();
    } catch (error) {
      console.error("Error adding book:", error);
    }
    console.log("Submitted: ", formData)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const dismissNotification = () => {
    // Reset the deleted state when the notification is dismissed
    setAdded(false);
  };
  return (
    <>
      {added && <Notification message="Book Added successfully." duration={3000} onDismiss={dismissNotification} />}
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">
          Add Book
        </h2>
        <input
          type="text"
          id="id"
          name="id"
          className="w-full border rounded-lg p-2"
          value={generateIntegerID()}
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
      Add Book
    </button>
      </form>
    </>
  )
}

export default AddForm