import { SimpleGrid } from "@chakra-ui/react";
import AddBook from "./componant/addBook";
import BookList from "./componant/bookList";
import FilterBooks from "./componant/filterBook";

function App() {
  return (
    <>
      <FilterBooks/>
      <hr />
      <h1 style={{fontSize:"30px",color:"red",backgroundColor:"teal"}}>Create a new  books</h1>
     
        <AddBook />
        <BookList/>
      
     
    </>
  );
}

export default App;
