import '@fontsource/roboto';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'
import React from 'react';
import  {Route as Router} from 'react-router-dom';
import { Route,NavLink,HashRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    table: {
        minWidth: 650,
      }
}));

function createData(name,no_of_questions_posted,no_of_answers) {
    return { name, no_of_questions_posted,no_of_answers };
  }  

function SearchUser(props)
{
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const rows = [
        createData('Peter',10,20),
        createData('Sam',20,50)
      ];
    return(
        <div>
        <NavBar />
        <form action="" name = "searchuser" className ={classes.root}>
        <Typography gutterBottom variant="h4" component="h4">
            <b>Search Results</b>
        </Typography>
        <Divider/>
        <Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>Name</b></TableCell>
                        <TableCell align="center"><b>No of questions posted</b></TableCell>
                        <TableCell align="center"><b>No of answers</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row" align="center">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.no_of_questions_posted}</TableCell>
                        <TableCell align="center">{row.no_of_answers}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </form>
        </div>
    )
}

export default SearchUser