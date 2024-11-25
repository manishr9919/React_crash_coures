import React from "react";
import { useReducer } from 'react';

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload };
    case 'BATCH':
      return { ...state, batch: action.payload };
    case 'COURSE':
      return { ...state, course: action.payload };
    case 'IMAGE':
      return { ...state, image: action.payload };
    case 'RATING':
      return { ...state, rating: parseInt(action.payload) };
    case 'STATUS':
      return { ...state, status: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};



export const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="wrapper" data-testid="add-student-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={(e) => dispatch({ type: 'NAME', payload: e.target.value })}
            data-testid="name-input"
          />
        </div>
        <div>
          <label htmlFor="batch">Batch: </label>
          <input
            type="text"
            id="batch"
            value={state.batch}
            onChange={(e) => dispatch({ type: 'BATCH', payload: e.target.value })}
            data-testid="batch-input"
          />
        </div>
        <div>
          <label htmlFor="course">Course: </label>
          <input
            type="text"
            id="course"
            value={state.course}
            onChange={(e) => dispatch({ type: 'COURSE', payload: e.target.value })}
            data-testid="course-input"
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            id="image"
            value={state.image}
            onChange={(e) => dispatch({ type: 'IMAGE', payload: e.target.value })}
            data-testid="image-input"
          />
        </div>
        <div>
          <label htmlFor="rating-select">Rating: </label>
          <select
            id="rating-select"
            value={state.rating}
            onChange={(e) => dispatch({ type: 'RATING', payload: e.target.value })}
            data-testid="rating-select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Active Status: </label>
          <input
            type="checkbox"
            id="status"
            checked={state.status === 'active'}
            onChange={(e) => dispatch({ type: 'STATUS', payload: e.target.checked ? 'active' : 'inactive' })}
            data-testid="status-checkbox"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;
  
