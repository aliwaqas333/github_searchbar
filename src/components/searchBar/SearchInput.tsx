import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

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
  handleChange: Function;
  setpage: Function;
};

export default function CustomizedInputBase(prop: propType) {
  const classes = useStyles();
  const [text, settext] = React.useState("");
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Github Repositories"
        inputProps={{ "aria-label": "search github repositries" }}
        onChange={(event) => settext(event.target.value)}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={(event) => {
          event.preventDefault();
          prop.handleChange(text); // call handle change for new api call with text as query
          prop.setpage(1); // reset page number
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
