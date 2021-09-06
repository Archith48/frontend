import '@fontsource/roboto';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React from 'react';
import  {Route as Router} from 'react-router-dom';
import { Route,NavLink,HashRouter } from 'react-router-dom';
import Question from './Question';
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

function SearchPost(props)
{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <form action="" name = "searchpost" className ={classes.root}>
        <Typography gutterBottom variant="h4" component="h4" color ="#000">
            <b>Search Results</b>
        </Typography>
        <Divider/>
        <Box>
            <h3>Question:</h3>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="#000">
                <Link href="/question">
                    Search Question
                </Link>
                {/*<HashRouter>
                    <NavLink to="/question">Search Question</NavLink>
                    <Route path="/question" component={Question}/>
                </HashRouter>*/}
            </Typography>
            <Typography gutterBottom variant="h6" color ="#000">
                    Search Question Description(Body)
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
            </div>
            <h3>Answer:</h3>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="#000">
                    Search Answer
            </Typography>
            <Typography align="center">
                <IconButton color="primary" >
                    <ThumbUpIcon/>
                </IconButton>
                Answer Score
                <IconButton color="primary" >
                    <ThumbDownIcon/>
                </IconButton>
            </Typography>
            <Divider/>
            </div>
        </Box>
        </form>
    )
}
export default SearchPost