import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '25px'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        logo: {
            marginRight: '10px',
            cursor: 'pointer',
            animation: 'bounceIn 0.6s',
            transition: 'all 0.4s cubic-bezier(.8,1.8,.75,.75)',
            '&:hover': {
                transform: 'rotate(30deg) scale(1.2)'
            }
        },
        myHeader: {
            flexGrow: 1
        },
        homeLink: {
            color: theme.palette.common.black,
            background: 'none',
            textDecoration: 'none'
        },
        title: {
            fontSize: '1rem',
            textTransform: 'uppercase',
            lineHeight: '1rem'
        },
        subTitle: {
            fontStyle: 'italic'
        }
    }),
);

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} color="transparent" position="static">
                <Toolbar>
                    <Link to="/">
                        <img className={classes.logo} src="./logo.svg" width="50" alt="Logo" />
                    </Link>

                    <div className={classes.myHeader}>
                        <Link to="/" className={classes.homeLink}>
                            <Typography variant="subtitle1" className={classes.title}>
                                Bhabani Prasad Dash
                        </Typography>
                            <Typography variant="caption" className={classes.subTitle}>
                                &lt;JavaScript Engineer /&gt;
                        </Typography>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
