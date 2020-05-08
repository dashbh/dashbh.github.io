import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AboutMe from '../../components/AboutMe';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  }),
);

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
        alignItems="center"
        justify="center"
        style={{ minHeight: 'calc(100vh - 200px)' }}
        spacing={1}>
        <AboutMe />
      </Grid>
    </div>
  );
}
