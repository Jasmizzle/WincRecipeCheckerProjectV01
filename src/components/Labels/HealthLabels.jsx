import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const HealthLabels = ({ recipe }) => {
  const healthLabels = recipe.healthLabels;

  return healthLabels.map((healthLabel) => {
    return (
      <Text
        as="i"
        color="#000000 !important"
        key={uuid()}
        fontFamily="'open sans', sans-serif"
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {healthLabel}
      </Text>
    );
  });
};
