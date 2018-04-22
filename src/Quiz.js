import React from 'react';
import Question from './Question.js';
import questions from './config/questions.json'

class Quiz extends React.Component{
  constructor(props){
    super(props);
    this.State= {
      answers: Array(questions.length).fill(0),
      currentQuestion: 0
    }
  }

  render() {
    return(
      <div className="container is-fluid">

        <section className="section"></section>

      <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Quiz
          </h1>
          <h2 className="subtitle">
            Z wiedzy o HTML
          </h2>
        </div>
      </div>
    </section>

    <section className="section"></section>

    <Question questions={questions} questionNo={this.props.match.params.questionNumber}/>

    <progress className="progress is-info" value="15" max="100">15%</progress>
    <div>
<a className="button is-pulled-left"><span className="panel-icon">
  <i className="fas fa-angle-left"></i>
</span>Wróć</a>
<a className="button is-pulled-right is-primary">Dalej <span className="panel-icon">
  <i className="fas fa-angle-right"></i>
</span></a>
    </div>
</div>
    );
  }
}
export default Quiz;
