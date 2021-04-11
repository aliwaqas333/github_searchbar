import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CustomizedInputBase from "./SearchInput";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import fetchRepos from "./fetchRepos";
import filterRepos from "./filterRepos";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

type PropType = {
  setrepos: Function;
  setSearchString: Function;
  setfetching: Function;
  page: number;
  setpage: Function;
  repos: any;
  searchString: string;
  setallRepos:Function;
  allRepos:any;
};

export default function SearchBar(prop: PropType) {
  let allRepositories:any =[]
  const per_page: number = 100;

  useEffect(() => {
    getAllReposOfUser();
  }, []);

  useEffect(() => {
    // lets get all repos 
    prop.setrepos(filterRepos(prop.searchString, prop.allRepos));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prop.searchString]);

  async function getAllReposOfUser() {
    const response = await fetchRepos(
      prop.setrepos,
      1,
      per_page,
      "asc",
      "full_name",
      prop.setfetching
    );
    if (!response.success) prop.setrepos([]);
    if (response.success) {
      allRepositories = response.data;
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
          <CustomizedInputBase
            setpage={prop.setpage}
            setSearchString={prop.setSearchString}
          />
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
