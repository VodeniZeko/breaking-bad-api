import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
import axios from "axios";

const Container = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  }, []);
  console.log(characters);
  return (
    <div>
      <Search />
      {characters.map(ch => (
        <Card ch={ch} key={ch.char_id} />
      ))}
    </div>
  );
};

export default Container;
