import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { TextareaAutosize } from "@material-ui/core";
import { Button } from '@material-ui/core';
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBar from "./NavBar";
import Header1 from "./Header1";
import GetComments from "./GetComments";

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

function Votting(props) {
    return (
        <div>
            <Box>
            <Grid item xs={12}>
            <ExpandLessIcon fontSize="medium" align="center"/>
            </Grid>
            <Grid item xs={12}>
            <Typography gutterBottom varriant="h6" align="center" color="#000"> {props.score} </Typography>
            </Grid>
            <Grid item xs={12}>
            <ExpandMoreIcon fontSize="medium"/>
            </Grid>
            </Box>
        </div>
    )
}

function Question(){
    const classes=useStyles()
    var questions
    const [similarQ,setSimilarQ]=useState([]);
    const [question,setQuestion]=useState([]);
    const [answers,setAnswer]=useState([]);
    const preventDefault = (event) => event.preventDefault();
    
    var url = window.location.pathname
    var q_id = url.split('/')[2]

    useEffect(()=>{
        fetch(`http://localhost:8089/questions/${q_id}`,{
            method:'GET'})
            .then(res=>(res.json()))
            .then(data=>{setQuestion(data)
                questions=data
            })
            .then(()=>{
                fetch('http://localhost:3300/suggested',{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({"Title":questions.Title,
                    "Body":questions.Body})
                })
                .then(res=>(res.json()))
                .then(data=>{setSimilarQ(data)})
                .then(()=>{
                    fetch(`http://localhost:8089/questions/${q_id}/answers`,{
                    method:'POST',
                    headers:{"Content-type":"application/json"}})
                    .then(res=>(res.json()))
                    .then(data=>{setAnswer(data)})
                })
            })
    },[])

    return(
     <div>
        <NavBar />
        <Header1 heading = {question.Title}/>
        <Grid container spacing={1}>
            <Grid item xs={9}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Votting score = {question.Score}/>
                    </Grid>
                    <Grid item xs={11}>
                    <Paper className={classes.paper}>
                    <Typography variant="body1" gutterBottom>{question.Body}</Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs={2} /> {/*Space*/}
                    <Grid item xs={10}>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <GetComments id = {q_id} />
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
                    {answers.map((answerText) => (
                        <Grid container spacing={1}>
                        <Grid item xs={1}>
                            <Votting score = {answerText.Score}/>
                        </Grid>
                        <Grid item xs={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>{answerText.Body}</Typography>
                        </Paper>
                        </Grid>
    
                        <Grid item xs={2} /> {/*Space*/}
                        <Grid item xs={10}>
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                            <GetComments id = {answerText.Id} />
                            <form className={classes.root} noValidate autoComplete="off" action="">
                                <TextField id="standard" label="Add Comment" fullWidth/>
                            </form>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    ))}
                </List>
                <Typography gutterBottom variant="h6" component="h5" color ="#000">
                    Your Answer:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Include all the information someone would need to understand your solution
                </Typography>
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