import React, { useState } from "react";

import { Box, Container, Grid } from "@material-ui/core";
import PrimaryAppBar from "./components/PrimaryAppBar/PrimaryAppBar";
import SearchBar from "./components/searchBar/SearchBar";
import ListOfRepos from "./components/ListOfRepos/ListOfRepos";
import UserCard from "./components/UserCard/UserCard";

// Main app component which forms the whole layout
/**
 * @return {<></>} Whole UI structure of the App.
 */
function App() {
  const [repos, setrepos] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [fetching, setfetching] = useState(false);
  const [page, setpage] = useState(1);
  const [allRepos, setallRepos] = useState([])

  return (
    <>
      <PrimaryAppBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <UserCard setFetching={setfetching} fetching={fetching} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <SearchBar
                setrepos={setrepos}
                allRepos = {allRepos}
                setallRepos={setallRepos}
                setSearchString={setSearchString}
                searchString={searchString}
                setfetching={setfetching}
                page={page}
                repos={repos}
              />
              <ListOfRepos
                repos={repos}
                searchString={searchString}
                fetching={fetching}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
