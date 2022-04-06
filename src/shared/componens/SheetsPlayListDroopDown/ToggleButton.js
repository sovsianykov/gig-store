import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";

const useStyles = makeStyles(() =>({
    root : {
        width: "100%",
        height: ({height})=> height? height:20
    }
}))

const ToggleButton = ({onClick, render ,height}) => {
    const classes = useStyles({height})

    return (
        <Box className={classes.root} onClick={onClick}>
            {render}
        </Box>
    );
};

export default ToggleButton;