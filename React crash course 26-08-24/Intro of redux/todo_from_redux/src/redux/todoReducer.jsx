const initialState = {
    todos: [],
  };
  
  // Reducer function to handle todo actions
   export function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { ...action.payload, completed: false }],
        };
        
      case 'MARK_COMPLETED':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: true } : todo
          ),
        };
        
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  
      default:
        return state;
    }
}