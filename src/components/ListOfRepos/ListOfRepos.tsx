import { Box, CircularProgress, Grid } from "@material-ui/core";
import React, {useEffect} from "react";
import SingleRepo from "./SingleRepo";
import NoRepos from "./NoRepos";

type PropType = {
  repos: any;
  searchString: String;
  fetching: boolean;
  page: any;
};
function ListOfRepos(prop: PropType) {
  let repositories = [];
  if (prop.fetching) {
    return (
      <Box
        style={{ height: "70vh" }}
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (prop.repos.length > 0) {
    repositories = prop.repos.map((item: any) => {
      return <SingleRepo key={item.id} item={item}></SingleRepo>;
    });
  }
  return (
    <Box>
      <Box>
        {prop.searchString && (
          <p>
            <strong>{prop.repos.length}</strong> results for repositories
            matching <strong>{prop.searchString}</strong>
          </p>
        )}
      </Box>
      {repositories.length ? repositories : <></>}
      {!repositories.length && <NoRepos />}
    </Box>
  );
}

export default ListOfRepos;
