import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useAnswer = videoID => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswer() {
      // database related works...
      const db = getDatabase();
      const answersRef = ref(db, 'answers/' + videoID + '/questions');
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // now I can request data from firebase
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers(Object.values(snapshot.val()));
          // setAnswers(prevAnswer => {
          //   return [...prevAnswer, ...Object.values(snapshot.val())];
          // });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    // Only fetch videos if the page is greater than 1
    fetchAnswer();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
};

export default useAnswer;
