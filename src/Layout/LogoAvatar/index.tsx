import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  }),
);

export default function LogoAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Bhabani Prasad Dash" src="/avatar.jpg" className={classes.large} />
    </div>
  );
}
