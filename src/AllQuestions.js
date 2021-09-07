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
import { useState, useEffect } from 'react';
import Header1 from './Header1';
import NavBar from './NavBar';


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
    const[notes,setNotes]=useState([])
    const questions=[]
    const answers=[]
    const QA=[]
    var i=0
    var j=0
    const preventDefault = (event) => event.preventDefault();
        useEffect(()=>{
            fetch("http://localhost:3300/mainpage2")
            .then(res=>res.json())
            .then(data=>{setNotes(data["questions"])
                console.log(data)
            })
        },[])

       
    return(
        <div>
            <NavBar />
            <Header1 heading="All Questions"/>
        <form action="" name = "allquestions" className ={classes.root}>
        <Divider/>
        {notes.map(e =>(
        <Box>
            <div style={{marginLeft:100}}>
            <Typography gutterBottom variant="h6" color ="default">
                <Link href="/question">
                    {e.Title}
                </Link>
            </Typography>
            <Typography gutterBottom variant="h6" color ="default">
                   {e.Body}
            </Typography>
            <Divider/>
            </div>
        </Box>
        ))}
        </form>
        </div>
    )
}
export default AllQuestions