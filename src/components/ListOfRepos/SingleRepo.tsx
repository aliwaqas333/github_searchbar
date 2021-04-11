import {
  Box,
  createStyles,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ComputerIcon from "@material-ui/icons/Computer";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);
function SingleRepo(prop: any) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1} className="single-repo">
        <Grid item xs={12}>
          <Typography className="repo-title" variant="h5" component="h2">
            <Link target="_blank" href={prop.item.html_url}>
              {prop.item.name}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">{prop.item.description}</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            container
            direction="row"
            alignItems="center"
            item
            xs={6}
            sm={3}
          >
            <ComputerIcon className="text-gold" />
            <span className="ml-1 mb-1">{prop.item.language}</span>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            item
            xs={6}
            sm={3}
          >
            <StarOutlineIcon className="text-gold" />
            <span className="ml-1 mb-1">{prop.item.stargazers_count}</span>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            item
            xs={6}
            sm={3}
          >
            <span>{prop.item.forks} forks</span>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            item
            xs={6}
            sm={3}
          >
            <Typography color="textSecondary" variant="body2">
              Published: {new Date(prop.item.pushed_at).toLocaleString("en-US")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default SingleRepo;
