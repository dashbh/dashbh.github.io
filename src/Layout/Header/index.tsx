import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    AppBar: {
        margin: 25
    },
    root: {
        flexGrow: 1,
    }
};

interface IProps {
    classes: any;
}

const Header = (props: IProps) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <header>
                <div className={classes.AppBar}>
                    <h2>Bhabani Prasad Dash</h2>
                </div>
            </header>
        </div>
    );
}

export default withStyles(styles)(Header);