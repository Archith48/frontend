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
import { useParams } from 'react-router-dom';

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

function SearchPost()
{
    const classes = useStyles();
    const params = useParams();
    const [notes,setNotes]=useState([])
    const preventDefault = (event) => event.preventDefault();
    var search_input=params.search_string
    console.log(search_input)
    const question=[]
    const answers=[]
    /*useEffect(()=>{
        fetch(`http://localhost:3300/searchpost/${search_input}`,{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({"search_string":"java c++ oauth"})
            })//.then(()=>history.push('/'))  
            .then(res=>(res.json()))      
            .then(data=>{setNotes(data["questions"])
                console.log(data)
            })      
        },[])*/

    useEffect(()=>{
        fetch(`http://localhost:3300/searchpost/${search_input}`)
        .then(res=>res.json())
        .then(data=>{setNotes(data["questions"])
        })
    })
    return(
        <div>
            <NavBar/>
            <Header1/>
        <form action="" name = "searchpost" className ={classes.root}>
        <Typography gutterBottom variant="h4" component="h4" color ="#000">
            <b>Search Results</b>
        </Typography>
        <Divider/>
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