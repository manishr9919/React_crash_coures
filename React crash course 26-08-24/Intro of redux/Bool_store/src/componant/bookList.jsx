import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import EditBook from './editBook'; // Import EditBook component


const BookList = () => {
  const books = useSelector((state) => state.books);
  const [bookToEdit, setBookToEdit] = useState(null); // Holds the book to be edited
  const dispatch = useDispatch();

  const handleMarkAsRead = (id) => {
    dispatch({ type: 'MARK_AS_READ', payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  const handleEditClick = (book) => {
    setBookToEdit(book); // Set the book to be edited
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {books.map((book) => (
          <Box className='allButton' key={book.id} p={5} shadow="md" borderWidth="1px">
            <Text fontSize="xl">{book.title}</Text>
            <Text>Author: {book.author}</Text>
            <Text>Genre: {book.genre}</Text>

            <Text>Status: {book.read ? 'Read' : 'Unread'}</Text>
            <Box style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
            <Button colorScheme="green" mt={4} onClick={() => handleMarkAsRead(book.id)} isDisabled={book.read}>
              Mark as Read
            </Button>
            <Button colorScheme="blue" mt={2} onClick={() => handleEditClick(book)}>
              Edit
            </Button>

            </Box>

           
            <Button style={{marginLeft:"14px"}} colorScheme="red" mt={2} onClick={() => handleDelete(book.id)}>
              Delete
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      {bookToEdit && <EditBook book={bookToEdit} onClose={() => setBookToEdit(null)} />} {/* Show edit form */}
    </>
  );
};

export default BookList;
