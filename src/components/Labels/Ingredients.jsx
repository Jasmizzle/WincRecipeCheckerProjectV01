import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Ingredients = ({ recipe }) => {
  const ingredients = recipe.ingredientLines;

  return ingredients.map((ingredient) => {
    return (
      <Text
        as="i"
        color="#000000 !important"
        fontFamily="'open sans', sans-serif"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        <Text>{ingredient}</Text>
      </Text>
    );
  });
};
