import axios from "axios";

// const baseUrl = import.meta.env.VITE_APP_BASEURL;
const baseUrl = "http://localhost:8080/NorvishRestful/bookapi";

const getFormat = () => {
  return localStorage.getItem('format');
};

const format = getFormat().toLowerCase()

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}?format=${format}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBook = async (bookId) => {
  try {
    const response = await axios.get(`${baseUrl}?id=${bookId}&format=${format}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
};

export const deleteBook = async(bookId) => {
  try {
    const response = await axios.delete(`${baseUrl}?id=${bookId}&format=${getFormat()}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
}