import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery, Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme:Theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        border: "2px solid transparent",
        transition:"0.15s ease-in-out",
        "&:hover": {
            color: "yellow",
            borderBottom: "2px solid yellow",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="fixed" style={{background:"brown"}}>
            <CssBaseline />
           <Toolbar>
               <Typography variant="h4" className={classes.logo}>
                   Diana store
               </Typography>
               {isMobile ? (
                   <DrawerComponent />
               ) : (
                   <div className={classes.navlinks}>
                       <Link to="/" className={classes.link}>
                           Home
                       </Link>
                       <Link to="/scores" className={classes.link}>
                           Scores
                       </Link>
                       <Link to="/lyrics" className={classes.link}>
                           Lyrics
                       </Link>
                       <Link to="/player" className={classes.link}>
                           Player
                       </Link>
                   </div>
               )}
           </Toolbar>
        </AppBar>
    );
}
export default Navbar;
