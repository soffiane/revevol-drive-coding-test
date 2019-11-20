import {createMuiTheme} from '@material-ui/core/styles';
import blueGrey from "@material-ui/core/es/colors/blueGrey";
import blue from "@material-ui/core/es/colors/blue";

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: blue,
        secondary: blueGrey
    }
});