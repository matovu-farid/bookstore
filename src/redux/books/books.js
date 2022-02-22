import { useSelector } from 'react-redux';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.books.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export const books = useSelector((state) => state.booksReducer);

export default booksReducer;
