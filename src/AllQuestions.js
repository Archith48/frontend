import { makeStyles } from "@material-ui/core";
import React from "react";
import { Drawer } from "@material-ui/core";
import { Typography } from "@material-ui/core";
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

const drawerWidth=300

const useStyles=makeStyles({
    page: {
        background:"white",
        width:"100%"
    },
    drawer:{
        width:drawerWidth
    },
    drawPaper:{
        width:drawerWidth,
        height: 'calc(100% - 64px)',
        top: 157
    },
    root:{
        display:"flex"
    }
})

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Question()
{
    const classes=useStyles()
    const preventDefault = (event) => event.preventDefault();
    const menuItems=[
        "Similar question 1","Similar question 2","Similar question 3","Similar question 4","Similar question 5","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3","Similar question 3"
    ]
    return(
        <div>
        
        <div className={classes.root}>
        
            <Drawer className={classes.drawer} 
            variant="permanent" 
            anchor="right"
            classes={{paper:classes.drawPaper}}>
                <Box border={1}>
                <List>
                    <h2 style={{textAlign:"center"}}>Suggested questions</h2>
                    <Divider/>
                    {menuItems.map((text) => (
                    <Box>
                    <Typography gutterBottom variant="h6" component="h4" color ="#000">
                        {/*<HashRouter>
                            <NavLink to="/question">{text}</NavLink>
                            <Route path="/question" component={Question}></Route>
                        </HashRouter>*/}
                          <ListItemLink href="/question">
                            <ListItemText primary={text}/>
                          </ListItemLink>
                    </Typography>
                    <Divider/>
                    </Box>
                    ))}
                </List>  
                </Box>              
            </Drawer>
        </div>
         <div>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                 Question Title

         </Typography>
         </Box>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
            Question Description
         </Typography>
         <Typography align="center">
             <ThumbUpIcon/> Question Score  <ThumbDownIcon/>
          </Typography>
         <Divider/>
         </Box>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
            Comments for question
         </Typography>
         <Typography align="center">
             <ThumbUpIcon/>  Comment Score for question  <ThumbDownIcon/>
          </Typography>
         <Divider/>
         </Box>
         <Box>
            <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                    Answer for question
                    <Typography align="center">
                        <ThumbUpIcon/>  Answer Score  <ThumbDownIcon/>
                    </Typography>
                    <Divider/>
                    <Box>
                    <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                            Comments for answer
                    </Typography>
                    <Typography align="center">
                        <ThumbUpIcon/>  Comment Score for answer  <ThumbDownIcon/>
                    </Typography>
                    <Divider/>
                    </Box>
            </Typography>
         </Box>
         </div>
         <div>
            <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                    Answer   
            </Typography>
         </div>
         <form action="" name = "questionForm" className ={classes.root}>
            <div>
            <TextareaAutosize id="outlined-basic" aria-label="minimum height" width="95%" minRows={10} placeholder = "Enter Detail Description of Your Answer here" /><br />
                <Button variant="contained" color="primary">
                    Post Answer
                </Button>
                <Typography className={classes.root}>
                    <HashRouter>
                        <NavLink to="/addcomment">Add Comment</NavLink>
                        <Route path="/addcomment" component={Trending}></Route>
                    </HashRouter>
                </Typography>
            </div>
        </form>
        </div>
    )
}