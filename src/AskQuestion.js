import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "100%"
        }
      }
}));

function AskQuestion(){
    const classes = useStyles();
    return(
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
            <TextField id="outlined-basic" label="Title of Question" variant="outlined" />
        </form>
    )
}
export default AskQuestion;