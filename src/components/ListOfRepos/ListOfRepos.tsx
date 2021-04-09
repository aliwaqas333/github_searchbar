import { Box, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SingleRepo from "./SingleRepo";
import NoRepos from "./NoRepos"
type PropType = {
  repos: any;
  searchString: String;
};
function ListOfRepos(prop: PropType) {
  let repositories = []
  if (prop.repos.items) {
    repositories = prop.repos.items.map((item: any) => {
      return <SingleRepo item={item}></SingleRepo>;
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
      {repositories.length && repositories}
      {!repositories.length && <NoRepos/>}
    </Box>
  );
}

export default ListOfRepos;
