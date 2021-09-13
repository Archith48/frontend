import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import NavBar from './NavBar';
import { useState } from 'react';
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

function AskQuestion(){
    const classes = useStyles();
    var title, body, tags;
    const setTitle = (e)=>{
        title=e.target.value
    }
    const setBody = (e)=>{
        body=e.target.value
    }
    const setTag = (e)=>{
        tags=e.target.value
    }
    const [notes,setNotes]=useState([])
    const handleSubmit = (e)=>{
        fetch('http://localhost:8089/questions/add',{
            method:'POST',
            headers:{"Content-type":"application/json",
                     "x-access-token":""},
            body:JSON.stringify({"Title":title,
                                  "Body":body,
                                  "Tags":tags})
            })
            .then(res=>(res.json()))      
            .then(data=>{setNotes(data)
                console.log(data)
            })
            .then(()=>
            alert("Question Posted")) 
    }
    return(
        <div>
        <NavBar />
        <br />
        <Grid container spacing={1}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <form action="" name = "questionForm" className ={classes.root}>
            <Typography gutterBottom variant="h4" component="h5" color ="#000">
                <b>Ask a Public Question</b>
            </Typography>
            <Box>
            <Typography gutterBottom variant="h6" component="h5" color ="#000">
                Title:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
                Be specific and imagine you are asking question to another person
            </Typography>
            </Box>
            <TextField id="outlined-basic" label="Title of Question" width="100%" variant="outlined"  onChange={setTitle}/>
            <Box>
                <Typography gutterBottom variant="h6" component="h5" color ="#000">
                    Body:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Include all the information someone would need to answer your question
                </Typography>
            </Box>
            <TextareaAutosize id="outlined-basic" aria-label="minimum height" width="95%" minRows={10} placeholder = "Enter Detail Description of Question here"  onChange={setBody} />

            <Box>
            <Typography gutterBottom variant="h6" component="h5" color ="#000" >
                Tags:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Add up to 5 tags to describe what your question is about
            </Typography>
            </Box>
            <TextField id="outlined-basic" label="Tags" width="100%" variant="outlined" onChange={setTag} />
            <div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Post Question
            </Button>
            </div>
        </form>
        </Paper>
        </Grid>
        </Grid>
        </div>
    )
}
export default AskQuestion;