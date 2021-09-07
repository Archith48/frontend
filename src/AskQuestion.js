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
            <Typography variant="body2" color="textSecondary" component="p">
                Be specific and imagin you are asking question to another person
            </Typography>
            </Box>
            <TextField id="outlined-basic" label="Title of Question" width="100%" variant="outlined"/>
            <Box>
                <Typography gutterBottom variant="h6" component="h5" color ="#000">
                    Body:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Include all the information someone would need to answer your question
                </Typography>
            </Box>
            <TextareaAutosize id="outlined-basic" aria-label="minimum height" width="95%" minRows={10} placeholder = "Enter Detail Description of Question here" />

            <Box>
            <Typography gutterBottom variant="h6" component="h5" color ="#000">
                Tags:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Add up to 5 tags to describe what your question is about
            </Typography>
            </Box>
            <TextField id="outlined-basic" label="Tags" width="100%" variant="outlined" />
            <div>
            <Button variant="contained" color="primary">
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