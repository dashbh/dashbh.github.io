import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} color="transparent" position="static">
                <Toolbar>
                    <img src="./logo.svg" width="50" alt="Logo" />
                    &nbsp;&nbsp;
                    <Typography variant="subtitle1" className={classes.title}>
                        Bhabani Prasad Dash
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
