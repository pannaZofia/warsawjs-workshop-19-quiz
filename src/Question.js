import React from 'react';

class Question extends React.Component{

  clickHandler(){
    console.log("Hey hey are you still there?");

  }
  changeUrl(val){
    if (val >= 3) {
      const stayHere = "4";
      const oldUrl = "http://localhost:3000/quiz/" + stayHere;
      return(
        oldUrl
      )
    }
    else{
    const next = parseInt(val) + 2;

    console.log(next);
    const newUrl = "http://localhost:3000/quiz/" + next;
    console.log(newUrl);
    return(
      newUrl
    )}
  }

  render() {
    var questionNo = this.props.questionNo -1;
    //console.log(questionNo);
    const nextQuestion = this.changeUrl(questionNo);
    return(
      <nav className="panel">
        <p className="panel-heading">
          {this.props.questions[questionNo].question}
        </p>

        {this.props.questions[questionNo].answers.map(answer => {
          return(
            <a className="panel-block" href={this.changeUrl(questionNo)} onClick={this.clickHandler}>
              <span className="panel-icon">
                <i className="fas fa-circle" aria-hidden="true"></i>
              </span>
                {answer}
            </a>
          )
        })}


      </nav>
    );
  }
}
export default Question;
