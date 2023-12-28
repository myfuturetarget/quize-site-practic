import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Answers from '../Components/Answers';
import MiniPlayer from '../Components/MiniPlayer';
import ProgressBar from '../Components/ProgressBar';
import useQuestionsList from '../Hooks/useQuestionsList';
import classes from '../assets/css/quize.module.css';
import { useAuth } from '../contexts/AuthContext';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'quizes':
      action.value.forEach(question => {
        question.options.forEach(option => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quize = ({ match }) => {
  const { id } = useParams();
  const { loading, error, quizes } = useQuestionsList(id);

  const [currentQuize, setCurrentQuize] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'quizes',
      value: quizes,
    });
  }, [quizes]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuize,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle next questions When Next question button will be clicked to get the next questions...
  const handleNextQuestion = () => {
    if (currentQuize + 1 < quizes.length) {
      setCurrentQuize(prevCurrent => prevCurrent + 1);
    }
    // console.log(quizes.length);
  };

  // handle prev questions When Next Prev Arrow button will be clicked to get the prev questions...
  const handlePrevQuestion = () => {
    if (currentQuize >= 1 && currentQuize <= quizes.length) {
      setCurrentQuize(prevCurrent => prevCurrent - 1);
    }
  };

  // submit quize into result page...
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  }

  // calculate percentage if progrese....
  const percentage =
    quizes.length > 0 ? ((currentQuize + 1) / quizes.length) * 100 : 0;

  return (
    <div>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna.length > 0 && (
        <div>
          <h1 className={classes.h1}>{qna[currentQuize].title}</h1>
          <h4>Question can have multiple answer</h4>
          <Answers
            input
            options={qna[currentQuize].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={handleNextQuestion}
            submit={submit}
            prev={handlePrevQuestion}
            progress={percentage}
          />
          <MiniPlayer id={id} />
        </div>
      )}
    </div>
  );
};

export default Quize;
