import React, {Component}  from 'react';

class Displayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
       "dynamicUpdate": true,
       "data":[]
    }
  }

  componentDidMount() {}

  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async fetchData(){
      var count = 0;
      await this.setState({"dynamicUpdate": true})
         while((this.state.dynamicUpdate) === true && count < 50){
            fetch("http://localhost:5000/api/dataUpdate")
            .then(res => res.json())
            .then(data => {
              var joined = this.state.data.concat(data.number);
              this.setState({data:joined})
            }
            )
            await new Promise(done => setTimeout(() => done(), 1000));
            count += 1;
         }
  }


  getRandom = () => {
     this.fetchData();
  }

  render(){
    return (
        <div>
            <button onClick = {this.getRandom}> Start Dynamic Update </button>
            <button onClick = {()=>this.setState({"dynamicUpdate":false})}> Stop Dynamic Update </button>
            <p>{
            this.state.data.length > 0
            ?this.state.data.map((number,i) => number+" ")
            :"Nothing"

            }</p>

        </div>
      );
  }

}

export default Displayer;
