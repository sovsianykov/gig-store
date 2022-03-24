import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";
import theme from "../constants/theme";

const useStyles = makeStyles(()=>({

    root: {
        maxWidth: 1100,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        background: theme.palette.background.default,
        padding: 0
    }
}))





const Layout = ({children}) => {
    const classes = useStyles()

    return (
        <Box  className={classes.root}>
            {children}
        </Box>
    );
};

export default Layout;