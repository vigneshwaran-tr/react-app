import React, { Component } from 'react';

import './App.css';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import Task1 from './Task1'
import Task2 from './Task2'

class App extends Component {
  render() {
    return (
       <div>
         <Task1/>
          <Task2/>
       </div>
    );
 }

}


class Task3 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      img:[]
    };
    }

  render(){
    
  
  return(
    <div>
      
    </div>

  );
}


}

export default App;
