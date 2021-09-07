import React from 'react';
import { Button, Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import pic from './Telstra.png';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import NavBar from './NavBar';

const useStyles=makeStyles((theme)=> ({
    grow: {
      flexGrow: 1,
    },
    roots:{
        display:"flex",
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(0),
        marginRight: theme.spacing(4),
        align: 'center',
    },
    root1: {
        '& > *': {
            margin: theme.spacing(2),
            marginLeft: theme.spacing(1),
            align: "right",
            flex: '1'
        },
      },    
      extendedIcon: {
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(5),
      },
    
    position:{
        display:"flex",
        padding: theme.spacing(1, 2),
        justifyContent: 'center',
        flexDirection: "column",
        //height: 200,
        align: "right"
    },
     root2: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
      root3: {
        padding: theme.spacing(8, 2),
        justifyContent: 'right',
        //flexDirection: "column",
        display: "flex",
        width: "100%",
        maxWidth: 50,
        backgroundColor: theme.palette.background.paper
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    
  
}));
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'PostedOn',
      headerName: 'Posted On',
      width: 150,
      editable: true,
    },
    {
        field: 'question',
        headerName: 'Question',
        width: 690,
        editable: true,
      },
      {
        field: 'answers',
        headerName: 'Answers',
        width: 132,
        editable: true,
      },
      {
        field: 'score',
        headerName: 'Score',
        width: 120,
        editable: true,
      },
      ];
  const rows = [
    { id: 1, question: 'What is Redux', PostedOn: '2021-01-01', answers: '4', score: '4' },
    { id: 2, question: 'Coding with Class Components', PostedOn: '2021-01-02', answers: '0', score: '4' },
    { id: 3, question: 'Module Not found error', PostedOn: '2021-01-03', answers: '2', score: '4' },
    { id: 4, question: 'Compilation error', PostedOn: '2021-01-04', answers: '3', score: '4' },
    { id: 5, question: 'Runtime Error', PostedOn: '2021-01-05', answers: '1', score: '4' },
    { id: 6, question: 'Syntax Error', PostedOn: '2021-01-06', answers: '5', score: '4' },
    { id: 7, question: 'Compiler error', PostedOn: '2021-01-07', answers: '5', score: '4' },
    { id: 8, question: 'Dependency Error', PostedOn: '2021-01-08' , answers: '7', score: '4' },
    { id: 9, question: 'Not able to find the version of the software', PostedOn: '2021-01-09', answers: '0', score: '4'  },
  ];

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
function Profile() {
    const classes=useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
        <NavBar />
        <div className={classes.roots}><a href='/profile'>
            <img height='120px' width="120px" src={pic} alt="ProfileImage" align="center" style={{marginTop:'20px'}} ></img></a>
            <Box padding="50px" color="textsecondary">
                <a href='/profile' style={{ textDecoration: 'None' }}>
                    Name: <b>Pradyumna S K</b> <br />
                    username: <b>pradyumnakedilaya</b> <br />
                    Joined: <b>January 27 2021</b><br />
                    Last Visited: <b>September 3 2021</b><br />
                    </a>
                <a href='https://linkedin.com/in/pradyumnakedilaya' style={{ textDecoration: 'None' }}>
                    Social Link: <b>linkedin.in/pradyumnakedilaya</b>
                </a>
            </Box>

<div>
<div className={classes.roots}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Questions<br></br>10
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          Answers<br></br>0
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          Comments<br></br>24
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          Score<br></br>96
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>

        <div className={classes.root1}>
            <Fab variant="extended" color="textsecondary" aria-label="edit" className={classes.extendedIcon}>
                <EditIcon /> Edit Profile
            </Fab>
            <Fab variant="extended" color="textsecondary" aria-label="settings" className={classes.extendedIcon}>
                <SettingsIcon />Settings
            </Fab>
        </div>


            <Divider />
        </div>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Answers" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[4]}
        //checkboxSelection
        disableSelectionOnClick
        onCellDoubleClick={(GridCellParams, event) => {
            if (event) {
                alert('GridCellParams.tabIndex : '+JSON.stringify(GridCellParams.tabIndex))
                console.log(JSON.stringify(GridCellParams.tabIndex))
                //window.location.href =  `/questions/${GridCellParams.id}`;
            }
          }}
      />
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Answers
      </TabPanel>
      <TabPanel value={value} index={2}>
        Comments
      </TabPanel>
    </div>    
        </>
      
    )
}
export default Profile;