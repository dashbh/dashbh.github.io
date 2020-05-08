import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
    },
    subTitle: {
      color: theme.palette.error.dark,
      fontSize: '1rem'
    }
  }),
);

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container
        alignItems="center"
        justify="center"
        style={{ minHeight: 'calc(100vh - 200px)', flexDirection: 'column' }}
        spacing={1}>
          <Typography variant="h2" className={classes.title}>Page not found</Typography>
          <br />
          <Typography className={classes.subTitle}>
            I'm sorry, I couldn't find the page you are looking for.
            </Typography>
        </Grid>
    </div>
  );
}
