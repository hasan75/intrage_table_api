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
  const emailFOrmatter = (data, row) => {
    return (
      <span onClick={() => alert(`Clicked on ${data}`)}>Email = {data}</span>
    );
  };
  const columns = [
    {
      dataField: 'email',
      text: 'Email',
      sort: 'true',
      formatter: emailFOrmatter,
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
