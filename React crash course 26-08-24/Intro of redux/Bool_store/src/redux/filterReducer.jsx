const initialState = {
    author: '',
    genre: '',
    status: 'all', // 'all', 'read', 'unread'
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return { ...state, [action.payload.filterType]: action.payload.value };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  