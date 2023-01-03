import React, { useEffect, useState } from "react";

import "./Table.css";

export interface dataType {
  name: string;
  color: string;
  score: number;
}

export interface configElType {
  label: string;
  render: (el: any) => React.ReactNode;
}

interface ITableProps {
  data: dataType[];
  config: configElType[];
}

const Table = ({ data, config }: ITableProps) => {
  const renderedHeaders = config.map(column => {
    return <th key={column.label}>{column.label}</th>
  })

  const renderedRows =
    data.map((rowData) => {
      return (
        <tr className="border-b" key={rowData.name} >
          {config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
          })}
        </tr>
      )
    })

  return <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
        {renderedHeaders}
      </tr>
    </thead>
    <tbody>
      {renderedRows}
    </tbody>
  </table>;
};

export default Table;