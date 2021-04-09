import { Box, Divider, Grid, Link, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ComputerIcon from "@material-ui/icons/Computer";
import Avatar from "@material-ui/core/Avatar";

function SingleRepo(prop: any) {
  return (
    <>
      <Grid container spacing={2} className="single-repo">
        <Grid alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Avatar alt="Remy Sharp" src={prop.item.owner.avatar_url} />
          </Grid>
          <Grid item>
            <Typography className="ml-1" variant="body2">
              <Link target="_blank" href={prop.item.owner.url}>
                {prop.item.owner.login}
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className="repo-title" variant="h5" component="h2">
            <Link target="_blank" href={prop.item.url}>
              {prop.item.name}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{prop.item.description}</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} className="d-flex" alignItems="center">
            <ComputerIcon className="text-gold" />
            <span className="ml-1 mb-1">{prop.item.language}</span>
          </Grid>

          <Grid item xs={6} sm={3} className="d-flex" alignItems="center">
            <StarOutlineIcon className="text-gold" />
            <span className="ml-1 mb-1">{prop.item.stargazers_count}</span>
          </Grid>

          <Grid item xs={6} sm={3} alignContent="center">
            <span>{prop.item.forks} forks</span>
          </Grid>

          <Grid item xs={6} sm={3}>
            Published: {new Date(prop.item.pushed_at).toLocaleString("en-US")}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}

export default SingleRepo;
