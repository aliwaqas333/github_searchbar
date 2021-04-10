import React, { FunctionComponent, useState } from "react";
import logo from "./logo.svg";
import { Box, Container, Grid } from "@material-ui/core";
import PrimaryAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import SearchBar from "./components/searchBar/SearchBar";
import ListOfRepos from "./components/ListOfRepos/ListOfRepos";

function App() {
  const [repos, setrepos] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [fetching, setfetching] = useState(false);
  const [page, setpage] = useState(1);
  return (
    <Box>
      <PrimaryAppBar />
      <Container>
        <Container maxWidth="md">
          <SearchBar
            setrepos={setrepos}
            setSearchString={setSearchString}
            searchString={searchString}
            setfetching={setfetching}
            setpage={setpage}
            page={page}
            repos={repos}
          />
          <ListOfRepos
            repos={repos}
            searchString={searchString}
            fetching={fetching}
            page={page}
          />
        </Container>
      </Container>
    </Box>
  );
}

export default App;
