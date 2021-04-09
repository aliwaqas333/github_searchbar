import React, { useState } from "react";
import logo from "./logo.svg";
import { Box, Container, Grid } from "@material-ui/core";
import PrimaryAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import SearchBar from "./components/searchBar/SearchBar";
import ListOfRepos from "./components/ListOfRepos/ListOfRepos"

function App() {
  const [repos, setrepos] = useState([])
  const [searchString, setSearchString] = useState("")
  return (
    <Box>
      <PrimaryAppBar/>
      <Container>
        <Container maxWidth="md" className="bg-dark">
          <SearchBar setrepos={setrepos} setSearchString={setSearchString} />
          <ListOfRepos repos={repos} searchString={searchString}/>
        </Container>
      </Container>
    </Box>
  );
}

export default App;
