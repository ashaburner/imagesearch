import React, { useEffect, useState } from 'react';
import { Box, Text, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const SearchBar = ({onTextChange}) => {
    const classes = useStyles();
    return (
        <Box m={1} style={{marginLeft: 16}}>
            <TextField
                onChange={(e) => onTextChange(e.target.value)}
                id="outlined-basic" label="Type Here" variant="outlined" 
            />
        </Box>
    )
}

export default SearchBar;