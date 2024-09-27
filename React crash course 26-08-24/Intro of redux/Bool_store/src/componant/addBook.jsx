import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', genre: '', read: false });
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch({ type: 'ADD_BOOK', payload: { ...book, id: Date.now() } });
    setBook({ title: '', author: '', genre: '', read: false });
  };

  return (
    <Box p={5} boxShadow="md" borderWidth="1px">
      <VStack spacing={4}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            placeholder="Enter book title"
          />
        </FormControl>
        <FormControl id="author">
          <FormLabel>Author</FormLabel>
          <Input
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            placeholder="Enter author name"
          />
        </FormControl>
        <FormControl id="genre">
          <FormLabel>Genre</FormLabel>
          <Input
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
            placeholder="Enter genre"
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleAddBook}>Add Book</Button>
      </VStack>
    </Box>
  );
};

export default AddBook;
