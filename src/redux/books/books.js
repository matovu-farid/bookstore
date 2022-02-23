const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const REPORT_ERROR = 'bookStore/books/REPORT_ERROR';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AcpJIcAvwt8ZMO0VHf3D/books';
export const addBook = (payload) => async (dispatch) => {
  const { id, title, author: category } = payload;
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, title, category }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (response.ok) {
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  } else {
    console.log(response.statusText);
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const url = `${baseUrl}/${payload}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch({
      type: REMOVE_BOOK,
      payload,
    });
  } else {
    dispatch({
      type: REPORT_ERROR,
      payload: response.statusText,
    });
  }
};
export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(baseUrl);
  if (response.ok) {
    const items = await response.json();
    const payload = [];
    Object.keys(items).forEach((key) => {
      const { category: author, title } = items[key][0];
      const id = parseInt(key, 10);
      payload.push({ id, title, author });
    });

    dispatch({
      type: FETCH_BOOKS,
      payload,
    });
  } else {
    dispatch({
      type: REPORT_ERROR,
      payload: response.statusText,
    });
  }
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS: return action.payload;
    case REPORT_ERROR: return state;
    default: return state;
  }
};

export default booksReducer;
