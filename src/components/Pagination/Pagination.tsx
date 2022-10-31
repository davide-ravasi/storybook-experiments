import React, { useEffect, useState } from "react";
import './Pagination.css';

const Pagination = ({ totalItems, itemsPage }) => {
  const url = 'https://randomuser.me/api?results=' + totalItems;
  const itemsPerPage = itemsPage;
  const [actualPage, setActualPage] = useState(1);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      let response = await fetch(url);
      if (response.ok) {
        let { results } = await response.json();
        setContent(results);
      }
    }

    fetchList();
  }, []);


  return (
    <div>
      <Pages content={content} itemsPerPage={itemsPerPage} actualPage={actualPage} />
      <Paging itemsAmount={content.length} itemsPerPage={itemsPerPage} actualPage={actualPage} setActualPage={setActualPage} />
    </div>
  )
};


const Paging = ({ itemsAmount, itemsPerPage, actualPage, setActualPage }) => {
  const [pages, setPages] = useState(0);

  const setNewPage = (page: number) => {
    console.log("page ", page);
    setActualPage(page);
  }

  useEffect(() => {
    setPages(Math.ceil(itemsAmount / itemsPerPage));
  }, [itemsAmount, itemsPerPage]);

  return (
    <ul className="paging">
      {pages && [...Array(pages)].map((page, index) => {
        const pageNumber = index + 1;

        return (
          <li onClick={() => setNewPage(pageNumber)} className={actualPage === pageNumber && 'current'}>{pageNumber}</li>
        )
      })}
    </ul>
  )
}

// generic component for displaying table from array
// of objects where fields of objects are columns
const Pages = ({ content, itemsPerPage, actualPage }) => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    if (content) {
      let newList = content.slice(actualPage, actualPage + itemsPerPage);
      setPageContent(newList);
    }
  }, [content, itemsPerPage, actualPage]);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>LastName</th>
        </tr>
      </thead>
      <tbody>
        {pageContent && pageContent.map(element => {
          return (
            <tr>
              <td>{element.name.first}</td>
              <td>{element.name.last}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

};

export default Pagination;