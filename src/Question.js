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
import { Route } from "react-router";

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
        width:drawerWidth
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
            anchor="left"
            classes={{paper:classes.drawPaper}}>
                <List>
                    {menuItems.map((text) => (
                    <Box>
                    <Typography gutterBottom variant="h6" component="h4" color ="#000">
                        <ListItemLink href="/">
                       <ListItemText primary={text}/>
                       </ListItemLink>
                    </Typography>
                    <Divider/>
                    </Box>
                    ))}
                </List>                
            </Drawer>
        </div>
         <div style={{marginLeft:310}}>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                 Question Title

         </Typography>
         <Divider/>
         </Box>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                 Question Description

         </Typography>
         <Divider/>
         </Box>
         <Box>
         <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                Comments for question

         </Typography>
         <Divider/>
         </Box>
         <Box>
            <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                    Answer for question

                    <Divider/>
                    <Box>
                    <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                            Comments for answer

                    </Typography>
                    <Divider/>
                    </Box>
            </Typography>
         </Box>
         </div>
         <div style={{marginLeft:310}}>
            <Typography gutterBottom variant="h6" component="h4" color ="#000" >
                    Answer   
            </Typography>
         </div>
         <form action="" name = "questionForm" className ={classes.root}>
            <div style={{marginLeft:310}}>
                <Box >                   
                <TextareaAutosize id="outlined-basic" aria-label="minimum height" width="100%" minRows={15}/>
                </Box>
                <Button variant="contained" color="primary">
                    Post Answer
                </Button>
                <Typography className={classes.root}>
                    <ListItemLink href="/">
                        <ListItemText primary="Add a comment"/>
                    </ListItemLink>
                </Typography>
            </div>
        </form>
        </div>
    )
}