import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useQuestionsList = videoID => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related works...
      const db = getDatabase();
      const quizRef = ref(db, 'quiz/' + videoID + '/questions');
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // now I can request data from firebase
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuizes(Object.values(snapshot.val()));
          // setQuizes(prevQuis => {
          //   const newValues = Object.values(snapshot.val());
          //   const uniqueValues = [...new Set([...prevQuis, ...newValues])];
          //   return uniqueValues;
          // });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    // Only fetch videos if the page is greater than 1
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    quizes,
  };
};

export default useQuestionsList;
