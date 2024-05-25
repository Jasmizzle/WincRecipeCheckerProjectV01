import {
  Heading,
  Image,
  Box,
  Flex,
  IconButton,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { DietLabels } from "./Labels/DietLabels";
import { Cautions } from "./Labels/Cautions";
import { Ingredients } from "./Labels/Ingredients";
import { Nutrients } from "./Labels/Nutrients";
import { HealthLabels } from "./Labels/HealthLabels";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Card
      mt={{ base: "50px", lg: "300px", xl: "300px" }}
      direction="column"
      w={{ base: "90%", lg: "70%", xl: "70%" }}
      h="100%"
      p="10"
      boxShadow="dark-lg"
      borderRadius="25px"
      bgGradient="linear(to-b, green.100, blue.600)"
      color="red.900"
      opacity="0.9"
      textAlign="center"
      fontFamily="'open sans', sans-serif"
    >
      <CardHeader>
        <Box position="relative">
          <IconButton
            variant={"ghost"}
            textAlign="left"
            color="#000000"
            icon={<ArrowLeftIcon />}
            _hover={{ bg: "black", color: "white" }}
            _active={{ bg: "#000000" }}
            onClick={() => onClick()}
          />
        </Box>

        <Heading size="lg" mb="3rem" color="black">
          Slow Cooker Turkey Dip Sandwiches recipes!
        </Heading>
        <Flex gap={5} flexWrap="wrap">
          <Box h="200px" w="400px">
            <Image
              h="100%"
              w="100%"
              pb="10px"
              borderRadius="5px"
              src={recipe.image}
              alt="recipe"
            />
          </Box>
          <Flex direction="column" gap={3}>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="#000000">
                Mealtype:
              </Text>
              <Text as="i" fontWeight="semibold" color="#000000">
                {recipe.mealType}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="#000000">
                Dish:
              </Text>
              <Text as="i" fontWeight="semibold" color="#000000">
                {recipe.dishType}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="#000000">
                Total cooking time:
              </Text>
              <Text as="i" fontWeight="semibold" color="#000000">
                {recipe.totalTime} minutes
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="#000000">
                persons:
              </Text>
              <Text as="i" fontWeight="semibold" color="#000000">
                {recipe.yield} people
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody
        direction="column"
        flexWrap="wrap"
        gap={2}
        align="flexStart"
        ml="3rem"
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          gap={5}
          m="10px auto"
        >
          {recipe.dietLabels.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b" color="#000000">
                Dietlabels:
              </Text>
              <Text as="i" color="#000000">
                <DietLabels recipe={recipe} />
              </Text>
            </Flex>
          ) : null}

          {recipe.cautions.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b" color="#000000">
                Cautions:
              </Text>
              <Text as="i" color="#000000">
                <Cautions recipe={recipe} />
              </Text>
            </Flex>
          ) : null}
        </Flex>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          textAlign="left"
          gap={5}
          m="10px auto"
        >
          <Box w={{ md: "50%", lg: "50%" }}>
            <Text as="b" color="#000000">
              Healthlabels:
            </Text>

            <Flex
              direction="row"
              flexWrap="wrap"
              gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
            >
              <HealthLabels recipe={recipe} />
            </Flex>
          </Box>

          <Box>
            <Text as="b" color="#000000">
              Ingredients:
            </Text>

            <Flex
              direction="column"
              flexWrap="wrap"
              gap={1}
              align="flex-start"
              justify="flex-start"
            >
              <Ingredients recipe={recipe} />
            </Flex>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex>
          <Nutrients recipe={recipe} />
        </Flex>
      </CardFooter>
    </Card>
  );
};
