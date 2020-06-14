import React, { useState, useEffect } from "react";
import Person from "../Person/Person";
import "./People.css";
import Loading from "./Loading";
import { sortByNameAndOffice } from "./helpers/sortByNameAndOffice"

const URL = "https://api.tretton37.com/ninjas";

function People() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          sortByNameAndOffice(result)
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="Loading-screen">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="People">
        {items.map(p => {
          return (
            <Person
              img={p.imagePortraitUrl}
              name={p.name}
              office={p.office}
              linkedin={p.linkedIn || null}
              github={p.gitHub || null}
              twitter={p.twitter || null}
            />
          );
        })}
      </div>
    );
  }
}

export default People;
