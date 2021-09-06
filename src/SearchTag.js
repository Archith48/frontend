import '@fontsource/roboto';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React from 'react';
import  {Route as Router} from 'react-router-dom';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";

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

function SearchTag(props)
{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <form action="" name = "trending" className ={classes.root}>
        <Typography gutterBottom variant="h4" component="h4">
            <b>Search Results</b>
        </Typography>
        <Divider/>
        <Box>
            <Typography gutterBottom variant="h6">
                <Link href="/question">
                    Question Title
                </Link>
            </Typography>
            <Typography gutterBottom variant="h6">
                    Question Body
            </Typography>
            <Typography align="center">
                <IconButton color="primary" >
                    <ThumbUpIcon/>
                </IconButton>
                Question Score
                <IconButton color="primary" >
                    <ThumbDownIcon/>
                </IconButton>
            </Typography>
            <Divider/>
        </Box>
        </form>
    )
}
export default SearchTag

