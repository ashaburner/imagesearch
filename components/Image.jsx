import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Card, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        height: 300,
        width: '100%',
        objectFit: 'cover'
    }
})

const Photo = ({ image }) => {
    const classes = useStyles();
    console.log(image.largeImageURL);
    return (
        <Card>
            <Image style={{width: 400, height: 400}} source={{uri: image.largeImageURL}} />
        </Card>
    )
}

export default Photo;