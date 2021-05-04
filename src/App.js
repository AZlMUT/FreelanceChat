import React, {Component} from 'react';
import {Auth,Home} from 'pages';
import { Route } from 'react-router-dom';

class App extends Component{
  render(){
    return <div className="wrapper">
      <Route exact path={["/","/login","/register"]} component={Auth}/>
      <Route exact path="/im" component={Home}/>
    </div>;
  }
}

export default App;
