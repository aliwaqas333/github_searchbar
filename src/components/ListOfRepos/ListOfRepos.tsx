import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
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
  if (prop.repos.items) {
    repositories = prop.repos.items.map((item: any) => {
      return <SingleRepo key={item.id} item={item}></SingleRepo>;
    });
  }
  return (
    <Box>
      <Box>
        {prop.searchString && (
          <p>
            <strong>{prop.repos.total_count}</strong> results for repositories
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
