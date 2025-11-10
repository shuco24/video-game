import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area="aside"
        bg="dodgerblue"
      >
        Aside
      </GridItem>

      <GridItem area="main" bg="gold">
        Maina
      </GridItem>
    </Grid>
  );
}

export default App;
