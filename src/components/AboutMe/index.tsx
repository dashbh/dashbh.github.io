import React from 'react';
import { makeStyles, createStyles, Typography, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center'
    },
    titleStart: {
      fontSize: '5rem',
      lineHeight: '5rem'
    },
    title: {
      fontSize: '5rem'
    },
    subTitle: {
      fontWeight: 300,
      lineHeight: '1.5rem'
    },
    techStack: {
      fontWeight: 500,
      color: theme.palette.primary.light
    },
    company: {
      fontWeight: 500,
      color: theme.palette.secondary.dark
    }
  })
);

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.titleStart} variant="h1">I'M</Typography>
      <Typography className={classes.title} variant="h1">BHABANI</Typography>

      <Typography variant="subtitle1" className={classes.subTitle}>
        A Creative Full-Stack Engineer based in Bangalore.<br />
        I currently work as a Senior Technical Associate in <i className={classes.company}>Publicis Sapient</i>.<br/>
        My technical proficiency includes
        <b className={classes.techStack}> React, Angular, Node.js, Express... </b>
        and I'm always motivated to learn new things. </Typography>
    </div>
  );
}
