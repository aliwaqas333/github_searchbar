import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CustomizedInputBase from "./SearchInput";
import Box from "@material-ui/core/Box";
import { Button, Grid, Typography } from "@material-ui/core";
import fetchRepos from "./fetchRepos";
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
};

export default function SearchBar(prop: PropType) {
  const classes = useStyles();
  // const sortButtons=[
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  // ]
  const handleChange = async (query: string) => {
    if (!query) {
      return false;
    }

    // show loading spinner
    prop.setfetching(true);
    const response = await fetchRepos(query, prop.page);
    if (!response.success) prop.setrepos([]);
    if (response.success) {
      prop.setSearchString(query);
      prop.setrepos(response.data);
    }
    prop.setfetching(false);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        className="bg-light p-1 mt-1"
      >
        <Grid item xs={12}>
          <CustomizedInputBase handleChange={handleChange} />
        </Grid>
      </Box>
      {prop.repos.total_count > 10 && (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body2">
            Current Page: {prop.page}, showing {prop.page * 10 - 10 + 1} to{" "}
            {prop.page * 10} / {prop.repos.total_count}
          </Typography>
          <Button
            onClick={(e) => {
              prop.setpage(prop.page + 1);
              handleChange(prop.searchString);
            }}
            color="primary"
          >
            Next page ({prop.page + 1})
          </Button>
        </Box>
      )}
    </>
  );
}
