import React, { useEffect } from "react";
import CustomizedInputBase from "./SearchInput";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import fetchRepos from "./fetchRepos";
import filterRepos from "./filterRepos";

type PropType = {
  setrepos: Function;
  setSearchString: Function;
  setfetching: Function;
  page: number;
  repos: any;
  searchString: string;
  setallRepos: Function;
  allRepos: any;
};

// Parameters may be declared in a variety of syntactic forms
/**
 * @param {Function}  setrepos - set repositories which will update ui aswell
 * @param {Function} setSearchString - filter string settting function
 * @param {Function} setfetching - function to change fetching status
 * @param {Page} page - Page number to fetch from github
 * @param {String} searchString - An optional param with a default value
 * @param {Function} setallRepos - main store, will be set only once
 * @param {Object} allRepos - set of all repos
 * @return {string} returns search bar UI component
 */
export default function SearchBar(prop: PropType) {
  const per_page: number = 100;

  useEffect(() => {
    getAllReposOfUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // lets get all repos
    prop.setrepos(filterRepos(prop.searchString, prop.allRepos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prop.searchString]);

  // React component that displays the search bar.
  /**
   * @return {<Box></Box>} displays the search bar.
   */
  async function getAllReposOfUser() {
    const response = await fetchRepos(
      1,
      per_page,
      "asc",
      "full_name",
      prop.setfetching
    );
    if (!response.success) prop.setrepos([]);
    if (response.success) {
      prop.setrepos(response.data);
      prop.setallRepos(response.data);
    }
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        className="bg-light p-1 mt-1"
      >
        <Grid item xs={12}>
          <CustomizedInputBase setSearchString={prop.setSearchString} />
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="body2">
          Current Page: {prop.page}, showing{" "}
          {prop.page * per_page - per_page + 1} to{" "}
          {prop.repos.length > per_page
            ? prop.repos.length
            : prop.page * per_page}{" "}
          of {prop.repos.length}
        </Typography>
      </Box>
    </>
  );
}
