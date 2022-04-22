import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';

const TableReact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/comments').then((res) =>
      setData(res.data)
    );
  };
  const columns = [
    {
      dataField: 'email',
      text: 'Email',
      sort: 'true',
    },
    {
      dataField: 'postId',
      text: 'Product Id',
    },
    {
      dataField: 'name',
      text: 'Name',
    },
  ];
  return (
    <div className='container'>
      <BootstrapTable
        keyField='id'
        data={data}
        columns={columns}
        striped
        hover
      />
    </div>
  );
};

export default TableReact;
