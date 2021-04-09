import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CustomizedInputBase from "./SearchInput";
import Box from '@material-ui/core/Box';
import {
  Grid
} from "@material-ui/core";
import SortButton from "./MenuButton";
import fetchRepos from "./fetchRepos"
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
    }
  })
);

type PropType = {
  setrepos: Function,
  setSearchString: Function
}

export default function SearchBar(prop:PropType) {
  const classes = useStyles();
  // const sortButtons=[
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  //   {label: "Language", options:["JavaScript", "HTML", "CSS"]},
  // ]
  const handleChange = async (event: React.ChangeEvent<{ value: string }>) => {
    const response = await fetchRepos(event.target.value); 
    if(response.success){
      console.log('reposList', response.data)
      prop.setSearchString(event.target.value)
      prop.setrepos(response.data);
    }
  };

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" className="bg-light p-1 mt-1">
      
        <Grid item xs={12}>
          <CustomizedInputBase handleChange={handleChange} />
        </Grid>
        {/* <Grid item >
          <SortButton />
        </Grid> */}
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
     
     </Box>
  )
}
