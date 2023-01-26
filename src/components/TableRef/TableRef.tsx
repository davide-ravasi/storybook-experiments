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

// test if table work without sortable component
const TableRef = ({ data, config }: ITableProps) => {
  return <SortableTable config={config} data={data} />;
};

const SortableTable = (props) => {
  const { config, data } = props;
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

  const header = (name) => (
    <>
      <span onClick={() => sortList('asc', name)}>asc</span>
      <span onClick={() => sortList('desc', name)}>desc</span>
    </>
  )

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


// remove fn sortList and add it to sortableTable
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