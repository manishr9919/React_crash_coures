// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './components/Products';
import Pagination from './components/Pagination';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`);
      setProducts(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
    setPage(1); // Reset page to 1 when changing limit
  };

  return (
    <div>
      <Products products={products} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        limit={limit}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
};

export default App;
