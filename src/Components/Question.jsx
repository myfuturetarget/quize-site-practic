import classes from '../assets/css/Question.module.css';
import Answers from './Answers';

const Question = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <i className="fa-regular fa-circle-question"></i>
        {answer.title}
      </div>
      <Answers options={answer.options} input={false} />
    </div>
  ));
};

export default Question;
