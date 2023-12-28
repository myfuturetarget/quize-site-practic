import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideoList = page => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      // database related works...
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt(String(page)),
        limitToFirst(10)
      );

      try {
        setError(false);
        setLoading(true);
        // now I can request data from firebase
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos(prevVideos => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
          // console.log('I am changed!');
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    // Only fetch videos if the page is greater than 1
    setTimeout(() => {
      fetchVideos();
    }, 2000);
    // fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default useVideoList;
