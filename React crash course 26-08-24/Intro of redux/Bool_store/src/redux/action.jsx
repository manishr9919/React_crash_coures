 export const markAsRead = (id) => {
    return { type: 'MARK_AS_READ', payload: id };
  };

   export const setFilter = (filterType, value) => {
  return { type: 'SET_FILTER', payload: { filterType, value } };
};
 export const editBook = (id, updatedDetails) => {
    return { type: 'EDIT_BOOK', payload: { id, updatedDetails } };
  };
  
   export const deleteBook = (id) => {
    return { type: 'DELETE_BOOK', payload: id };
  };
  