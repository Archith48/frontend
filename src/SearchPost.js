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
import { useEffect } from 'react';
import { useState } from 'react';
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

function SearchPost(props)
{
    const classes = useStyles();
    const [notes,setNotes]=useState([])
    const preventDefault = (event) => event.preventDefault();
    useEffect(()=>{
        fetch('http://localhost:3300/searchposts',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({"search_string":"oauth"})
            })//.then(()=>history.push('/'))  
            .then(res=>(res.json()))      
            .then(data=>{setNotes(data["questions"])
                console.log(data)
            })      
        },[])
    return(
        <div>
            <NavBar />
            <Header1 heading="Search Post Results" />
            <form action="" name = "searchpost" className ={classes.root}>
            <Box>   
            {notes.map(e=>(
                <div style={{marginLeft:100}}>
                <Typography gutterBottom variant="h6" color ="#000">
                    <Link href="/question">
                    {e.Title}
                    </Link>
                </Typography>
                <Typography gutterBottom variant="h6" color ="#000">
                        {e.Body}
                </Typography>
                <Divider/>
                </div>
            ))}
            </Box>
            </form>
        </div>
    )
}
export default SearchPost