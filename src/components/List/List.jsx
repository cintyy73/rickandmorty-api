import React from "react";
import Character from "../Character/Character";
import {Stack } from "@chakra-ui/react";

const List = ({characters}) => {
  return (
   <Stack> 
        {characters.map((character)=><Character key={character.id} character={character} / >)} 
    </Stack>

  );
};

export default List;
