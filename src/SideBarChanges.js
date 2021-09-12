import React from "react";
import { ListItemIcon, ListItem, ListItemText } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SideBarChanges(props){
    if (props.status){
      return(
        <div>
        <ListItemLink href="/profile"><ListItemIcon><AccountCircle /></ListItemIcon><ListItemText primary="Profile" /></ListItemLink>
        <ListItemLink href="/logout"><ListItemIcon><PowerSettingsNewIcon /></ListItemIcon><ListItemText primary="Log Out" /></ListItemLink>
        </div>
      )
    }
    else{
      return(
        <div>
        <ListItemLink href="/login"><ListItemIcon><PowerSettingsNewIcon /></ListItemIcon><ListItemText primary="Log In" /></ListItemLink>
        </div>
      )
    }
}

export default SideBarChanges;