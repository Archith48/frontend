import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { TextareaAutosize } from "@material-ui/core";
import { breakpoints } from "@material-ui/system";
import { Button } from '@material-ui/core';
import { Route,NavLink,HashRouter } from 'react-router-dom';
import Trending from "./Trending";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Header1 from "./Header1";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "20px"
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    typography: {
      flexGrow: 1,
      textAlign: "justify"
    },
    page: {
        background:"white",
        width:"100%"
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function Question(){
    const classes=useStyles()
    const [similarQ,setSimilarQ]=useState([]);
    const [question,setQuestion]=useState([]);
    var [notes,setNotes]=useState([]);
    var [commentQ,setCommentQ]=useState([]);
    var [answerComment,setAnswerComment]=useState([]);
    const preventDefault = (event) => event.preventDefault();

    var q_id = 28
    useEffect(()=>{
    fetch('http://localhost:3300/suggested',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({"Title":"Testing Jtest v1.2",
            "Body":"Jest Testing going on"})
        })//.then(()=>history.push('/'))  
        .then(res=>(res.json()))
        .then(data=>{setSimilarQ(data)
            console.log(data)
        })
    },[])

    useEffect(()=>{
        fetch(`http://localhost:8089/questions/${q_id}`,{
            method:'GET'})
            .then(res=>(res.json()))
            .then(data=>{setQuestion(data)
                console.log(data)
            })
    },[])

    useEffect(()=>{
        fetch(`http://localhost:8089/questions/${q_id}/answers`,{
            method:'POST',
            headers:{"Content-type":"application/json"}})
            .then(res=>(res.json()))
            .then(data=>{setNotes(data)
                console.log(data)
            })
    },[])

    console.log(notes)
    var answers = ["answer1","answer2","answer3"]
    commentQ = ["comment1","comment 2"]
    var commentA = [["commentA11","commentA12"],[],["commentA31"],[],[],[]]

    return(
     <div>
        <NavBar />
        <Header1 heading = {question.Title}/>
        <Grid container spacing={1}>
            <Grid item xs={9}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        voting
                    </Grid>
                    <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        {question.Body}
                    </Paper>
                    </Grid>

                    <Grid item xs={2} /> {/*Space*/}
                    <Grid item xs={10}>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                        {commentQ.map((text) => (
                            <Box>
                                <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    votting
                                </Grid>
                                <Grid item xs={10}>
                                <Typography>
                                    <ListItemText primary={text}/>
                                </Typography>
                                </Grid>
                                <Divider/>
                                </Grid>
                                <Divider />
                            </Box>
                        ))}
                        <form className={classes.root} noValidate autoComplete="off" action="">
                            <TextField id="standard" label="Add Comment" fullWidth/>
                        </form>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Typography gutterBottom variant="h6">Answers</Typography>
                <List>
                    {answers.map((answerText,index) => (
                        <Box>
                            <Grid container spacing={1}>
                            <Grid item xs={2}>
                                voting
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>{answerText}</Typography>
                                <Grid container spacing={1}>
                                <Grid item xs={12}>
                                {commentA[index].map((commentAText) => (
                                    <Box>
                                        <Grid container spacing={1}>
                                            <Grid item xs={2}>
                                                voting
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography>{commentAText}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                    </Box>
                                ))}
                                <form className={classes.root} noValidate autoComplete="off" action="">
                                    <TextField id="standard" label="Add Comment" fullWidth/>
                                </form>
                                </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Divider />
                        </Box>
                    ))}
                </List>
                <Box>
                <Typography gutterBottom variant="h6" component="h5" color ="#000">
                    Your Answer:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Include all the information someone would need to understand your solution
                </Typography>
            </Box>
            <TextareaAutosize id="outlined-basic" aria-label="minimum height" fullWidth minRows={10} placeholder = "Enter Detail Description of your Answer here" />
            <br />
            <Button variant="contained" color="primary">
                Post Answer
            </Button>
            </Paper>
            </Grid>

            <Grid item xs={3}>
            <Paper className={classes.paper}>
            <Box>
                <List>
                    <h2 style={{textAlign:"center"}}>Suggested questions</h2>
                    <Divider/>
                    {similarQ.map((text) => (
                    <Box>
                    <Typography gutterBottom variant="h6" component="h4" color ="#000">
                        {/*<HashRouter>
                            <NavLink to="/question">{text}</NavLink>
                            <Route path="/question" component={Question}></Route>
                        </HashRouter>*/}
                          <ListItemLink href="/question">
                            <ListItemText primary={text.Title}/>
                          </ListItemLink>
                    </Typography>
                    <Divider/>
                    </Box>
                    ))}
                </List>  
                </Box>
            </Paper>
            </Grid>
        </Grid>
     </div>
 )
}

export default Question;