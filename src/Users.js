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
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'User',
      headerName: 'User',
      width: 200,
      editable: true,
    },
    {
      field: 'Joined',
      headerName: 'Joined On',
      width: 150,
      editable: true,
    },
    {
      field: 'questions',
      headerName: 'Questions',
      width: 152,
      editable: true,
    },
    {
      field: 'answers',
      headerName: 'Answers',
      width: 132,
      editable: true,
    },
    {
      field: 'comments',
      headerName: 'Comments',
      width: 150,
      editable: true,
    },
    {
      field: 'score',
      headerName: 'Score',
      width: 120,
      editable: true,
    },
    {
      field: 'followers',
      headerName: 'Followers',
      width: 180,
      editable: true,
    },
  ];
  const rows = [
    { id: 1, User: 'Pradyumna', Joined: '2021-01-01', answers: '4', score: '4' },
    { id: 2, User: 'Archith', Joined: '2021-01-02', answers: '0', score: '4' },
    { id: 3, User: 'Mohith', Joined: '2021-01-03', answers: '2', score: '4' },
    { id: 4, User: 'Anusha', Joined: '2021-01-04', answers: '3', score: '4' },
    { id: 5, User: 'Mukund', Joined: '2021-01-05', answers: '1', score: '4' },
    { id: 6, User: 'Ambarish', Joined: '2021-01-06', answers: '5', score: '4' },
    { id: 7, User: 'Jayram', Joined: '2021-01-07', answers: '5', score: '4' },
    { id: 8, User: 'Gopal', Joined: '2021-01-08' , answers: '7', score: '4' },
    { id: 9, User: 'Prajna', Joined: '2021-01-09', answers: '0', score: '4'  },
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



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
          border:"outlined"
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      image:{
        height:"50px",
        width:"50px",
        alt:"ProfileImage",
        align:"center"
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
      },
    }));
      
function Users()
{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
      <div>
        <NavBar />
    <><br />
    <div className={classes.root}>
      <AppBar position="static" color='secondary'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Users" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
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
    </div>
            </> 
            </div>  
    );
}
export default Users;
