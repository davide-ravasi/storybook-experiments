import { useEffect, useState } from "react";

const useSort = (data) => {
  const [sortOrder, setSortBy] = useState("");
  const [sortBy, setColName] = useState("");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (sortOrder === "") setDataList(data);
  }, [sortOrder, data]);

  const sortList = (order, sortBy) => {
    setSortBy(order);
    setColName(sortBy);

    if (order) {
      const orderList = order === "asc" ? 1 : -1;
      const newDataList = [...dataList].sort((a, b) => {
        if (typeof a[sortBy] === "string") {
          return a[sortBy].localeCompare(b[sortBy]) * orderList;
        } else {
          return (a[sortBy] - b[sortBy]) * orderList;
        }
      });

      setDataList(newDataList);
    }
  };

  return {
    sortOrder,
    sortBy,
    dataList,
    sortList,
  };
};

export default useSort;
