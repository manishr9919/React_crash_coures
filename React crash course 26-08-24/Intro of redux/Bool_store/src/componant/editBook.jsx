import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';

const EditBook = ({ book, onClose }) => {
  // Pre-fill the form with current book details
  const [editedBook, setEditedBook] = useState({ ...book });
  const dispatch = useDispatch();

  const handleEditBook = () => {
    // Dispatch the edited book details to Redux store
    dispatch({ type: 'EDIT_BOOK', payload: { id: book.id, updatedDetails: editedBook } });
    onClose(); // Close the form after saving
  };

  return (
    <Box p={5} boxShadow="md" borderWidth="1px" mt={5}>
      <VStack spacing={4}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            value={editedBook.title}
            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
            placeholder="Enter book title"
          />
        </FormControl>
        <FormControl id="author">
          <FormLabel>Author</FormLabel>
          <Input
            value={editedBook.author}
            onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
            placeholder="Enter author name"
          />
        </FormControl>
        <FormControl id="genre">
          <FormLabel>Genre</FormLabel>
          <Input
            value={editedBook.genre}
            onChange={(e) => setEditedBook({ ...editedBook, genre: e.target.value })}
            placeholder="Enter genre"
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleEditBook}>
          Save Changes
        </Button>
        <Button colorScheme="gray" onClick={onClose}>
          Cancel
        </Button>
      </VStack>
    </Box>
  );
};

export default EditBook;
