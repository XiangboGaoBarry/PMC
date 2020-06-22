import React, {Component}  from 'react';
import Displayer from '../PMC/displayer';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        code:"",
        login:false
    }
  }

  componentDidMount() {}

  signIn = () => {
    fetch("http://localhost:5000/api/signIn")
    .then(res=> res.json())
    .then(code=> {
        if (code.code === this.state.code){
           this.setState({
              login:true
           })
        }
        else{
            alert("Wrong password")
        }
    })
  }


  render(){
    return (
        this.state.login
        ? <Displayer/>
        :
        <div>
          <input
            type="password"
            id="sign_in_code"
            placeholder = "Please enter the sign in code"
            onChange = {code=>this.setState({code:code.target.value})}/>
          <button onClick = {this.signIn}>Sign In</button>
        </div>
      );
  }

}

export default Login;
