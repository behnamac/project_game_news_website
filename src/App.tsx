import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav " "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="green">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="red">
          main
        </GridItem>{" "}
      </Grid>
    </>
  );
};

export default App;
