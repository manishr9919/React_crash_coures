import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Select, FormControl, FormLabel } from '@chakra-ui/react';

const FilterBooks = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ author: '', genre: '', status: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    dispatch({ type: 'SET_FILTER', payload: { filterType: name, value } });
  };

  return (
    <Box p={5} boxShadow="md" borderWidth="1px">
      <FormControl id="author">
        <FormLabel>Filter by Author</FormLabel>
        <Select name="author" onChange={handleFilterChange} placeholder="Select author">
          {/* Map authors from a dynamic list */}
          <option value="Author 1">Author 1</option>
          <option value="Author 2">Author 2</option>
        </Select>
      </FormControl>
      <FormControl id="genre" mt={4}>
        <FormLabel>Filter by Genre</FormLabel>
        <Select name="genre" onChange={handleFilterChange} placeholder="Select genre">
          {/* Map genres from a dynamic list */}
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
        </Select>
      </FormControl>
      <FormControl id="status" mt={4}>
        <FormLabel>Filter by Status</FormLabel>
        <Select name="status" onChange={handleFilterChange} placeholder="Select status">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBooks;
