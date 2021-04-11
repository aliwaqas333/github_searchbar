import { CircularProgress } from "@material-ui/core";
import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import fetchUser from "./fetchUser";
import EmailIcon from '@material-ui/icons/Email';

type propType = {
  setFetching: Function;
  fetching: Boolean;
};
export default function UserCard(prop: propType) {
  const [user, setuser]: any = useState([]);

  useEffect(() => {
    fetchUser(prop.setFetching, setuser);
  }, []);

  if (prop.fetching) {
    <CircularProgress />;
  }

  return (
    <Grid container spacing={3} justify="center">
      <Grid container item xs={12} justify="flex-start">
        <Avatar
          alt={user.name}
          src={user.avatar_url}
          style={{ width: "200px", height: "200px" }}
        />
      </Grid>
      <Grid container direction="column" item xs={12}>
        <Typography variant="body1">
          <Link target="_blank" href={user.html_url}>
            {user.name}
          </Link>
        </Typography>
        <Typography variant="caption">
          <Link target="_blank" href={user.html_url}>
            {user.login}
          </Link>
        </Typography>
      </Grid>
      <Grid container xs={12} item>
        <Typography variant="body1">{user.bio}</Typography>
      </Grid>

      <Grid container xs={12} item alignItems="center">
        <Typography variant="body1">{user.following} Following | </Typography>
        <Typography className="ml-1" variant="body1">{ user.followers} Followers</Typography>
      </Grid>
    </Grid>
  );
}
