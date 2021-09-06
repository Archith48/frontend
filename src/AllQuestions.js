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

function AllQuestions(props)
{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <form action="" name = "allquestions" className ={classes.root}>
        <Box>
            <h3>Question:</h3>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="#000">
                <Link href="/question">
                    Question Title
                </Link>
                {/*<HashRouter>
                    <NavLink to="/question">Search Question</NavLink>
                    <Route path="/question" component={Question}/>
                </HashRouter>*/}
            </Typography>
            <Typography gutterBottom variant="h6" color ="#000">
                    Question Description(Body)
            </Typography>
            <Divider/>
            </div>
            <h3>Answer:</h3>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="#000">
                    Question Answer
            </Typography>
            <Divider/>
            </div>
        </Box>
        </form>
    )
}
export default AllQuestions
