import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import head2 from '../images/head2.jpeg'
import Context from './Context';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}>
          
      <Grid item xs={12}>
       <Context />
        </Grid>
        {/* <Grid item xs={6}>
        <img className="h-2/5 w-2/6 rounded-md pt-6" src={head2} alt=""/>
        </Grid> */}
        {/* <Grid item xs={3}>
        <img className="h-full w-11/12 rounded-md pt-6" src={head2} alt=""/>
        </Grid>
       
        <Grid item xs={3}>
        <img className="h-full w-11/12 rounded-md pt-6" src={head2} alt=""/> */}
        {/* </Grid> */}
      </Grid>
    </div>
  );
}