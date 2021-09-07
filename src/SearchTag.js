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
import { useEffect } from 'react';
import { useState } from 'react';
import history from 'react-router-dom';
import NavBar from './NavBar';
import Header1 from './Header1';

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
    const [notes,setNotes]=useState([])
    const classes = useStyles();
    const history=useHistory();
    const preventDefault = (event) => event.preventDefault();
    const ques=[]
    useEffect(()=>{
    fetch('http://localhost:3300/searchTags',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({"Tags":["java"]})
        })
        .then(res=>(res.json()))      
        .then(data=>{setNotes(data["questions"])
            console.log(data)
            console.log(ques)
        })      
    },[])
    return(
        <div>
            <NavBar />
            <Header1 heading="Search Tag Results" />
            <form action="" name = "trending" className ={classes.root}>
            <Box>
                {notes.map(note=>(
                    <Box>
                <Typography gutterBottom variant="h6" key={note._id}>
                    <Link href="/question">
                        {note.Title}
                    </Link>
                </Typography>
                <Typography gutterBottom variant="h6" key={note._id}>
                    {note.Body}
                </Typography>
                </Box>
                ))}
                <Divider/>           
            </Box>
            </form>
        </div>
    )
}
export default SearchTag
