import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
} from "@mui/material";
import CardCharacter from "../../common/cardCharacter/CardCharacter";

const Characters = () => {
  const [characters, setCharacter] = useState([]);
  useState(() => {});

  useEffect(() => {
    //fetch("https://rickandmortyapi.com/api/character")
    // por defecto el fetch es una petición tipo get
    //    .then((res) => res.json())
    //    .then((res) => setCharacter(res.results));

    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacter(res.data.results));

    //axios.post(),
    //axios.delete() etc
  }, []);
  console.log(characters);

  return (
    <>
      <Typography variant="h2" color="primary"align="center">Personajes</Typography>
      <div style={{
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}>
        {characters.map((character) => {
          return (
            <CardCharacter character={character} key={character.id}/>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
