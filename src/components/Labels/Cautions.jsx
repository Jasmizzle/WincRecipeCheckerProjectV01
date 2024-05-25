import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Cautions = ({ recipe }) => {
  const Cautions = recipe.cautions;

  return Cautions.map((caution) => {
    return (
      <Text
        color="#000000 !important"
        fontWeight="semibold"
        fontFamily="'open sans', sans-serif"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {caution}
      </Text>
    );
  });
};
