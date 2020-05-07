import { createMuiTheme } from "@material-ui/core/styles";
import { teal, deepOrange, common } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: deepOrange,
        background: {
            default: common.white
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

export default theme;