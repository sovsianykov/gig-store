import React from 'react';
import {makeStyles} from "@mui/styles";
import theme from "../../../constants/theme";
import {Grid} from "@mui/material";
import {initialState} from "../../../../redux/initialState";
import SheetsListItem from "../../componens/SheetsListItem";

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


const SheetsList = () => {
    const classes = useStyles()
    console.log(initialState)
    return (
        <Grid container className={classes.root} flexDirection='column' >
            {initialState.sheets.map(item => <SheetsListItem item={item} key={item.id} />)}
        </Grid>
    );
};

export default SheetsList;