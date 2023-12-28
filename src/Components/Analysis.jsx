import classes from '../assets/css/Analysis.module.css';
import Question from './Question';

const Analysis = ({ answers }) => {
  return (
    <div className={classes.analysis}>
      <h1 className={classes.h1}>Question Analysis</h1>
      <Question answers={answers} />
    </div>
  );
};

export default Analysis;
