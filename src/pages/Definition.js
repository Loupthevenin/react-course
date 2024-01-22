import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // // const url = 'https:ezfihefizhfhzefih/fjpzfhhefzujz'
    // const url = 'https://httpstat.us/500'
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((response) => {
        console.log(response.status);
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login");
        } else if (response.status === 500) {
          setError(true);
        }

        if (!response.ok) {
          setError(true);

          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">search another</Link>
      </>
    );
  }
  if (error) {
    return (
      <>
        <p>Something went wrong, try again ?</p>
        <Link to="/dictionary">search another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => {
            return (
              <p>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
