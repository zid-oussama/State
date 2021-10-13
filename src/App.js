import React from "react";
import "./App.css";
import Info from "./Component/Info.js";
import Waiting from './Component/Waiting.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      show: false,

    }
  }

  tgl = () => {
    this.setState({ show: !this.state.show })
  }
  componentDidMount() {
    console.log('App componentDidMount()')

  }
  componentDidUpdate() {
    console.log('App componentDidUpdate()')
  }


  render() {
    console.log('App render()')
    return (
      <div className="App">
        <Button onClick={this.tgl}   >{this.state.show ? 'Click To Hide' : 'Click To Show'} </Button>
        {this.state.show ? <Info /> : <Waiting />}

      </div>
    );
  }
}

export default App;
