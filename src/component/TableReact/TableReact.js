import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

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
      <span
        className='text-warning fw-bold'
        // onClick={() => alert(`Clicked on ${data}`)}
      >
        Email = {data}
      </span>
    );
  };

  const onClickFun = (data, row) => {
    return <span>ID: {data}</span>;
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
      sort: 'true',
      formatter: onClickFun,
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
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: 'dbclick',
        })}
      />
    </div>
  );
};

export default TableReact;
