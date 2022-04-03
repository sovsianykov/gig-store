import React from 'react';
import {Grid, Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import theme from "../../constants/theme";
import { Document, Page } from 'react-pdf';

const useStyles = makeStyles(()=>({

    root: {
        maxWidth: 900,
        height:"auto"
    },
    paper: {
        width:"100%",
        margin: theme.spacing(2,"auto"),
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        background: theme.palette.background.default,
        padding: 0,
        borderRadius:"5px",
        overflow:"hidden"
    },
    imgItem: {
        display: "block",
        width:"100%"
    }
}))

const SheetsListItem = ({item}) => {
    const classes =useStyles()
    return (
        <Grid item lg={12} className={classes.root}>
            <Paper className={classes.paper} >
                <img src={item.path} alt="" className={classes.imgItem}/>
            </Paper>
        </Grid>

    );
};

export default SheetsListItem;