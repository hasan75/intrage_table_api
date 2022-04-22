import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableReact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((resData) => setData(resData));
  };
  return (
    <div>
      <h1>Tabler</h1>
    </div>
  );
};

export default TableReact;
