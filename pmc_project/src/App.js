import React, {Component}  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from './component/Server/signin';

class Login extends Component {

  render(){
    return (
        <div>
          <Router>
            <Route exact path="/" component={Signin}/>
          </Router>
        </div>
      );
  }

}

export default Login;
