import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/BookList/BookList';
import { addBook } from '../redux/books/books';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      title,
      author,

    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="book-page">
      <BookList />
      <form className="book-form">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title ..." />
        <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author ..." />

        <select aria-label="categories" defaultValue="">
          <option value="" disabled hidden>Category</option>
          <option value="sci-fi">Category 1</option>
          <option value="romance">Category 2</option>
          <option value="action">Category 3</option>
        </select>
        <button onClick={submitBookToStore} type="button">Add book</button>
      </form>
    </div>
  );
};

export default Books;
