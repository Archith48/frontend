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
        <><br></br>
{/*         <div>
            <Box className={classes.root} padding="10px" color="textsecondary">
                <a href='/users' style={{ textDecoration: 'None' }}>
                    <h1>Users</h1>
                </a>

                <TextField id="outlined-search" label="Search by User" type="search" variant="outlined" />
                  </Box>
            </div>
            <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={2} ><a href='/user/pradyumna'>
          <img className={classes.image}
            src="data:image/jpeg;base64,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"
            alt ="" style={{ marginTop: "10px" }}
          ></img><br></br>
          pradyumna<br></br>
          india<br></br>
          joined:24-september<br></br></a>
        </Grid>
      </Grid>
    </div> 
 */}

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
    );
}
export default Users;
