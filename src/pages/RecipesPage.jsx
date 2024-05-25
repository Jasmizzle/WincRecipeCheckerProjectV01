import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { SearchRecipe } from "../components/SearchRecipe";

export const RecipesPage = () => {
  const greeting = "Winc Recipe App";

  const [userRecipe, setUserRecipe] = useState("");

  return (
    <Center
      w="100%"
      h="100%"
      flexDir="column"
      bgImage="url('./assets/recipe-images/pexels-gabby-k-6621423.jpg')"
      bgPosition="top"
      bgRepeat="repeat"
      bgSize={{ base: "contain", md: "cover", lg: "cover", xl: "cover" }}
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading
            width="100%"
            h="250px"
            mb="10px"
            bgPosition="top"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            fontSize={{ base: "3rem", sm: "4rem", md: "5rem", lg: "7rem" }}
            color="green.400"
            textShadow="3px 3px black"
            fontFamily="'open sans', sans-serif"
          >
            {greeting}
          </Heading>

          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
