import React, { useState, useEffect } from "react";

import { Box, Container, Grid } from "@material-ui/core";
import PrimaryAppBar from "./components/PrimaryAppBar/PrimaryAppBar";
import SearchBar from "./components/searchBar/SearchBar";
import ListOfRepos from "./components/ListOfRepos/ListOfRepos";
import UserCard from "./components/UserCard/UserCard";
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
