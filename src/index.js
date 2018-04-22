import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




class Score extends React.Component{
  render(){
    //console.log(this.props);
    return(
      <div>
      <p>its a score</p>
      </div>
    )
  }
}


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Quiz}/>
      <Route exact path="/quiz/:questionNumber" component={Quiz}/>
      <Route path="/score" component={Score}/>
    </div>

  </Router>,
   document.getElementById('root'));
