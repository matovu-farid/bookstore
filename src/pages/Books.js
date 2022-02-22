import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList/BookList';
import { addBook } from '../redux/books/books';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const books = useSelector((state) => state.booksReducer);

  const submitBookToStore = () => {
    const id = books.length;
    const newBook = {
      id,
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
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
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
        <button onClick={submitBookToStore} type="button">Add book</button>
      </form>
    </div>
  );
};

export default Books;
