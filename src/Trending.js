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

function upvote(Id)
{
    console.log(Id)
    fetch("http://localhost:8060/questions?"+Id)
        .then(res=>res.json())
        .then(data=>{
            fetch("http://localhost/8060/questions?"+Id,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:data.Score=data.Score+1
            })
        })    
}

function Trending(props)
{
    const [notes,setNotes]=useState([])
    const classes = useStyles();
    const history = useHistory();
    const preventDefault = (event) => event.preventDefault();
    const handleOnClick = (e)=>{
        history.push("/question")                
    }
    /*const upvote=(e)=>{
        console.log("Up vote")
        console.log(e)
    }*/
    const downvote=(e)=>{
        console.log("Down vote")
        console.log(e)
    }
    useEffect(()=>{
        fetch("http://localhost:3300/trending")
        .then(res=>res.json())
        .then(data=>{setNotes(data)
            console.log(data)
        })
    },[])
    return(
        <form action="" name = "trending" className ={classes.root}>
        <Box>
            <Typography gutterBottom variant="h5" component="h4" color ="#000">
                    {notes.map(note=>(
                        <Box>
                            <Typography key={note._id}>
                                <Link href="/question" onClick={handleOnClick}>                               
                                    {note.Title}
                                </Link>
                            </Typography>
                            <Typography key={note._id}>                            
                                {note.Body}
                            </Typography>
                            <Divider/>
                        </Box>
                    ))}
                
            </Typography>
            <Divider/>
        </Box>
        </form>
    )
}
export default Trending
