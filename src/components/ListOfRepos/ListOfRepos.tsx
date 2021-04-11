import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import SingleRepo from "./SingleRepo";
import NoRepos from "./NoRepos";

type PropType = {
  repos: any;
  searchString: String;
  fetching: boolean;
};

/**
 * @typedef {object} PropType Props
 * @param   {Array}  repos - Array of Repositories state.
 * @param   {string} searchString - The filter string
 * @param   {Boolean}  fetching - A boolean to indicate that repositories are being fetched
 * @return {<Box>} JSX List of all repositories
 */
function ListOfRepos(prop: PropType) {
  /**
   * @type {string[]} JSX element to display the repos in DOM.
   */
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
      {repositories.length > 0 ? repositories : <NoRepos />}
    </Box>
  );
}

export default ListOfRepos;
