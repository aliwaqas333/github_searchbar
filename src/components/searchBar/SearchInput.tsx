import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

type propType = {
  setSearchString:Function;
};

// Input component of search bar
/**
 * @param {Function}  setFetching - Function to change fetching state.
 * @param {Boolean} setSearchString - An optional param (Closure syntax)
 * @return {<Paper></Paper>} UI component
 */
export default function CustomizedInputBase(prop: propType) {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Github Repositories"
        inputProps={{ "aria-label": "search github repositries" }}
        onChange={(event) => prop.setSearchString(event.target.value)}
      />
    </Paper>
  );
}
