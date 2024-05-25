import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const DietLabels = ({ recipe }) => {
  const dietLabels = recipe.dietLabels;

  return dietLabels.map((dietLabel) => {
    return (
      <Text
        color="#000000 !important"
        fontWeight="semibold"
        key={uuid()}
        fontFamily="'open sans', sans-serif"
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {dietLabel}
      </Text>
    );
  });
};
