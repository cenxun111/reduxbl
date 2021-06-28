import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Center from './center/Center'
import Rightside from './center/Rightside'
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container >
          
      <Grid item xs={1}>
     
        </Grid>
        <Grid item lg={8} xs={10}>
        <Center />
        </Grid>
        <Hidden mdDown>
        <Grid item xs={2}>
        <Rightside />
        </Grid>
        </Hidden>
       
        <Grid item xs={1}>
       
        </Grid>
      </Grid>
    </div>
  );
}