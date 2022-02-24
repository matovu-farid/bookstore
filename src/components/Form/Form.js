import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.css';

const Form = () => {
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
  const options = [
    { value: 'sci-fi', label: 'sci-fi' },
    { value: 'romance', label: 'romance' },
    { value: 'action', label: 'action' },
  ];

  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book title ..." />
        <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author ..." />
        <Select className="select" placeholder="categories ..." options={options} />

        <button className="bg-blue add-button" onClick={submitBookToStore} type="button">Add book</button>
      </form>
    </div>
  );
};

export default Form;
