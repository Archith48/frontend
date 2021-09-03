import '@fontsource/roboto';

import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React from 'react';
import  {Route as Router} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "100%"
        }
      
    }
}));

function Trending(props)
{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <form action="" name = "trending" className ={classes.root}>
        <Box>
            <Typography gutterBottom variant="h5" component="h4" color ="#000">
                <Link href="/question">
                    Trending Question
                </Link>
            </Typography>
            <Divider/>
        </Box>
        </form>
    )
}

export default Trending