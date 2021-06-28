import React, { useEffect} from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from './Posts/Posts'
import Navbar from "./header/Navbar";
import { CssBaseline } from "@material-ui/core";
import Lay from "./Lay";
import Upload from "./upload/Upload";
import SubContext from "./subcontext/SubContext";
import Messages from "./messages/Messages";

const App = () => {

  return (
    <div>
      <CssBaseline />
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Lay/>
        </Route>
        <Route path = "/upload">
          <Upload/>
        </Route>
        <Route path ="/sub">
        <SubContext/>
        </Route>
        <Route path = "/messages" >
          <Messages/>
        </Route>
        <Route path = '/posts'>
          <Posts/>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
};

export default App;
