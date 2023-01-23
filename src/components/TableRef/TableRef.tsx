import React, { useState } from "react";

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


const TableRef = ({ data, config }: ITableProps) => {
  return <SortableTable config={config} data={data} />;
};

const SortableTable = ({ config, data }) => {
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

  return <Table config={config} dataList={dataList} sortList={sortList} />
}

const Table = ({ config, dataList, sortList }) => {

  const renderedHeaders = config.map(column => {
    const { label, name, sortValue } = column;
    return (
      <th key={label}>
        {sortValue &&
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
  )
}

export default TableRef;