import {
  Box,
  Image,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { FaSeedling } from "react-icons/fa";
import { DietLabels } from "./Labels/DietLabels";
import { Cautions } from "./Labels/Cautions";

export const RecipeItem = ({ recipe, onClick }) => {
  const VegaLabels = () => {
    if (recipe.healthLabels.includes("Vegan")) {
      return "Vegan";
    }
    if (recipe.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    } else return "";
  };

  const vega =
    recipe.healthLabels.includes("Vegan") ||
    recipe.healthLabels.includes("Vegetarian");

  return (
    <Card
      align="center"
      justify="center"
      gap={3}
      onClick={() => onClick(recipe)}
      as="button"
      h="500px"
      w="280px"
      alignItems="center"
      justifyContent="start"
      direction="column"
      boxShadow="none-lg"
      borderRadius="25px"
      bgGradient="linear(to-b, blue.100, green.600)"
      color="#000000"
      textAlign="center"
      fontFamily="'open sans', sans-serif"
    >
      <Box h="200px" w="100%">
        <Image
          h="100%"
          w="100%"
          borderTopRadius="25px"
          src={recipe.image}
          alt="recipe"
        />
      </Box>
      <CardHeader h="100px">
        <Text
          fontSize={{
            base: "0.7rem",
            sm: "0.8rem",
            md: "0.9rem",
            lg: "1rem",
          }}
          color="black.900"
        >
          {recipe.mealType}
        </Text>
        <Heading
          fontSize={{
            base: "0.7rem",
            sm: "0.8rem",
            md: "0.9rem",
            lg: "1rem",
          }}
          p="5px"
          textAlign="center"
          onClick={onClick}
        >
          {recipe.label}
        </Heading>
        <Text
          fontSize={{
            base: "0.7rem",
            sm: "0.8rem",
            md: "0.9rem",
            lg: "1rem",
          }}
        >
          {recipe.dishType}
        </Text>

        {vega ? (
          <Flex
            color="black.500"
            gap={3}
            align="center"
            justify="center"
            mt="5px"
          >
            <FaSeedling
              w={{
                base: "0.5rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1rem",
              }}
              h={{
                base: "0.5rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1rem",
              }}
            />
            <Text
              fontSize={{
                base: "0.7rem",
                sm: "0.8rem",
                md: "0.9rem",
                lg: "1rem",
              }}
              fontWeight="semibold"
              color="black.600"
              flexWrap="wrap"
            >
              {VegaLabels()}
            </Text>
          </Flex>
        ) : null}
      </CardHeader>

      <CardBody h="150px" mt="30px">
        <Flex gap={10} align="flex-start" justify="center">
          {recipe.dietLabels.length > 0 ? (
            <Box>
              <Text
                fontSize={{
                  base: "0.7rem",
                  sm: "0.8rem",
                  md: "0.9rem",
                  lg: "1rem",
                }}
              >
                Dietlabels:
              </Text>
              <DietLabels recipe={recipe} />
            </Box>
          ) : null}
          {recipe.cautions.length > 0 ? (
            <Box>
              <Text
                fontSize={{
                  base: "0.7rem",
                  sm: "0.8rem",
                  md: "0.9rem",
                  lg: "1rem",
                }}
              >
                Cautions:
              </Text>
              <Cautions recipe={recipe} />
            </Box>
          ) : null}
        </Flex>
      </CardBody>
    </Card>
  );
};
