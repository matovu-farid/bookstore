const ADDBOOK = 'books/add';
const REMOVEBOOK = 'books/remove';

export const addBook = (book) => ({
  type: ADDBOOK,
  payload: book,
});
export const removeBook = (id) => ({
  type: ADDBOOK,
  payload: id,
});
const booksReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case ADDBOOK: return { ...state, books: [...state.books, action.payload] };
    case REMOVEBOOK: return {
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    };
    default: return state;
  }
};

export default booksReducer;
