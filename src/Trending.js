import '@fontsource/roboto';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React, { useEffect } from 'react';
import  {Route as Router} from 'react-router-dom';
import { useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import NavBar from './NavBar';
import Header1 from './Header1';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "100%",
        }
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1500,
    },
    page: {
        background:"white",
        width:"100%"
    }
}));

function Trending()
{
    const [notes,setNotes]=useState([])
    const classes = useStyles();
    const history = useHistory();
    const preventDefault = (event) => event.preventDefault();
    const handleOnClick = (e)=>{
        history.push("/question")                
    }
   
    useEffect(()=>{
        fetch("http://localhost:3300/trending")
        .then(res=>res.json())
        .then(data=>{setNotes(data)
            console.log(data)
        })
    },[])
    return(
        <div>
            <NavBar/>
            <Header1 heading="Trending questions"/>
        <Divider/>
        <Box>
            <Typography gutterBottom variant="h5" component="h4" color ="#000">
            {notes.map(e =>(
                <Paper className={classes.paper}>
                <Grid container spacing={1}>
                <Grid alignItems="center" justifyContent="center" item xs={1}>
                    <Typography gutterBottom variant='body1' color="#000" align='justify'>
                        Score = {e.Score}<br/>
                        {e.ViewCount} views
                    </Typography>
                </Grid>
                <Grid item xs={11}>
                <Paper className={classes.paper}>
                <Box>
                    <Typography gutterBottom variant="h6" color ="#000">
                        <Link href = {"/question/"+e.Id}>
                            {e.Title}
                        </Link>
                    </Typography>
                    <Typography gutterBottom variant="body1" color ="#000">
                        {e.Body}
                    </Typography>
                </Box>
                </Paper>
                </Grid>
                </Grid>
                </Paper>
            ))}                
            </Typography>
            <Divider/>
        </Box>
        </div>
    )
}
export default Trending
