const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AcpJIcAvwt8ZMO0VHf3D/books';
export const addBook = (payload) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
    },
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  const url = `${baseUrl}/${payload.id}`;
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
