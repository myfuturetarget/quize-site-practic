import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../Components/Analysis';
import Summary from '../Components/Summary';
import useAnswer from '../Hooks/useAnswer';
const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  const { loading, error, answers } = useAnswer(id);

  function calculate() {
    let score = 0;
    answers.forEach((question, index) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const useScore = calculate();

  return (
    <div>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {answers && answers.length > 0 && (
        <div>
          <Summary scoreResult={useScore} noq={answers.length} />
          <Analysis answers={answers} />
        </div>
      )}
    </div>
  );
};

export default Result;
