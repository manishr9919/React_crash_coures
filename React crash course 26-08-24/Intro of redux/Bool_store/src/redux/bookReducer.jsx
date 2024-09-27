const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.payload);
    case 'MARK_AS_READ':
      return state.map(book =>
        book.id === action.payload ? { ...book, read: true } : book
      );
    case 'EDIT_BOOK':
      return state.map(book =>
        book.id === action.payload.id ? { ...book, ...action.payload.updatedDetails } : book
      );
    default:
      return state;
  }
};

export default booksReducer;
