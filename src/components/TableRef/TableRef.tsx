import React, { useEffect, useState } from "react";

import useSort from './useSort';

import "./TableRef.css";

export interface dataType {
  name: string;
  color: string;
  score: number;
}

export interface configElType {
  label: string;
  name: string;
  render: (el: any) => React.ReactNode;
  sortable: boolean;
}

interface ITableProps {
  data: dataType[];
  config: configElType[];
}

// test if table work without sortable component
// add function to render asc-desc-reset values
const TableRef = ({ data, config }: ITableProps) => {
  return <SortableTable config={config} data={data} />;
};

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, dataList, sortList } = useSort(data);

  // find a way to set col name
  const header = (name) => {

    if (sortBy !== name || !sortBy) {
      return (
        <>
          <span onClick={() => { sortList('asc', name) }}>asc</span>
          <span onClick={() => { sortList('desc', name) }}> desc</span >
        </>
      )
    }
    return (
      <>
        {sortOrder !== 'asc' && <span onClick={() => { sortList('asc', name) }}>asc</span>}
        {sortOrder !== 'desc' && <span onClick={() => { sortList('desc', name) }}> desc</span >}
        <span onClick={() => { sortList('', name) }}> reset</span>
      </>
    )
  }

  const newConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header
    }
  })

  return <Table dataList={dataList} config={newConfig} />
}

const Table = ({ config, dataList }) => {
  const renderedHeaders = config.map(column => {
    const { label, name, header } = column;
    return (
      <th key={label}>
        {header && header(name)}
        {column.label}
      </th>
    )
  })

  const renderedRows =
    dataList.map((rowData) => {
      return (
        <tr className="border-b" key={rowData.name} >
          {config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
          })}
        </tr>
      )
    })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default TableRef;