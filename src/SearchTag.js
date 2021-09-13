import '@fontsource/roboto';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React from 'react';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import Header1 from './Header1';
import { useParams } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "100%"
        }      
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1500,
    }
}));

function SearchTag(props)
{
    const [notes,setNotes]=useState([])
    const classes = useStyles();
    const params = useParams();
    const preventDefault = (event) => event.preventDefault();
    var tag=params.tag

    useEffect(()=>{
        fetch(`http://localhost:3300/searchTags/${tag}`)
        .then(res=>res.json())
        .then(data=>{setNotes(data["questions"])
        })
    })
    return(
        <div>
            <NavBar/>
            <Header1 heading="Search Tag Results"/>
        <form action="" name = "trending" className ={classes.root}>
        <Box>
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
            <Divider/>       
        </Box>
        </form>
        </div>
    )
}
export default SearchTag
