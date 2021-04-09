import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ComputerIcon from "@material-ui/icons/Computer";

function SingleRepo(prop: any) {
  return (
    <Box className="single-repo">
      <Typography className="repo-title" variant="h5" component="h2">
        {prop.item.name}
      </Typography>
      <Typography variant="body2">{prop.item.description}</Typography>
      <Grid
        xs={12}
        md={6}
        className="d-flex"
        direction="row"
        justify="space-between"
      >
        <Grid item className="d-flex" alignItems="center">
          <ComputerIcon className="text-gold" />
          <span>Javascript</span>
        </Grid>

        <Grid item className="d-flex" alignItems="center">
          <StarOutlineIcon className="text-gold" />{prop.item.stargazers_count}
        </Grid>

        <Grid item>License</Grid>

        <Grid item>Updated 14 hours ago</Grid>
      </Grid>
    </Box>
  );
}

export default SingleRepo;
