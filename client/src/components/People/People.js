import React, { useState, useEffect } from "react";
import Person from "../Person/Person";
import "./People.css";
import Loading from "../Loading/Loading";
import { sortByNameAndOffice } from "./helpers/sortByNameAndOffice";
import Pagination from "../Pagination/Pagination";
import FilterTool from "../FilterTool/FilterTool";

const API_URL = "https://api.tretton37.com/ninjas";

function People() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [currOffice, setOffice] = useState("All");

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    async function filterData() {
      fetch(API_URL)
        .then(res => res.json())
        .then(
          result => {
            setIsLoaded(true);
            sortByNameAndOffice(result);
            setItems(
              currOffice === "All"
                ? result
                : result.filter(o => o.office === currOffice)
            );
          },
          error => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    filterData();
  }, [currOffice]);

  const chooseOffice = e => {
    e.preventDefault();
    setOffice(e.target.value);
  };

  return (
    <div className="People">
      {!isLoaded && !error ? (
        <div className="Loading-screen">
          <Loading />
        </div>
      ) : (
        <section className="container">
          <FilterTool chooseOffice={chooseOffice} />
          <div className="People-info">
            {currentPosts.map(p => {
              return (
                <Person
                  key={p.name}
                  img={p.imagePortraitUrl}
                  name={p.name}
                  office={p.office}
                  linkedin={p.linkedIn}
                  github={p.gitHub}
                  twitter={p.twitter}
                />
              );
            })}
          </div>
          <div className="People-pages">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={items.length}
              paginate={paginate}
              value={URL}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default People;
