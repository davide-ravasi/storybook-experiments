import React, { useState } from "react";

import "./Table.css";

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


const Table = ({ data, config }: ITableProps) => {
  const [dataList, setDataList] = useState(data);

  const sortList = (order, colName) => {
    const orderList = order === 'asc' ? 1 : -1;
    const newDataList = [...dataList].sort((a, b) => {
      if (typeof a[colName] === 'string') {
        return a[colName].localeCompare(b[colName]) * orderList;
      } else {
        return (a[colName] - b[colName]) * orderList;
      }
    })

    setDataList(newDataList);
  }

  const renderedHeaders = config.map(column => {
    const { label, name, sortable } = column;
    return (
      <th key={label}>
        {sortable &&
          <>
            <span onClick={() => sortList('asc', name)}>asc</span>
            <span onClick={() => sortList('desc', name)}>desc</span>
          </>
        }
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
  );
};

export default Table;