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
            <Divider/>
            </div>
            <h3>Answer:</h3>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="#000">
                    Search Answer
            </Typography>
            <Divider/>
            </div>
        </Box>
        </form>
    )
}

export default SearchPost