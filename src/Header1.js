import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Divider } from '@material-ui/core';
import { Typography } from '@material-ui/core';


function Header1(props){
  return (
    <div>
            <Toolbar style={{padding : "0px 200px"}}>
                <Typography type="title" color="textPrimary" style={{ flex: 1 }}>
                    Title
                </Typography>
                <div>
                <Button variant="contained" color="primary" href = "/askquestion">
                    Ask Question
                </Button>
                </div>
            </Toolbar>
            <Divider />
    </div>
  );
}

export default Header1;