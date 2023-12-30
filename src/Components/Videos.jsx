import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../Hooks/useVideoList';
import Video from './Video';

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className="infinity"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(prevState => prevState + 10)}
          loader={
            <p style={{ textAlign: 'center', color: '#12472e' }}>Loading...</p>
          }
          endMessage={<p>No more data to load.</p>}
        >
          {videos.map((video, index) => {
            if (video.noq > 0) {
              const key = video.youtubeID;
              // console.log('Video key:', key);
              return (
                <Link
                  to={`/quize/${key}`}
                  state={{ some: `${video.title}` }}
                  key={key + index}
                >
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              );
            } else {
              const key = video.youtubeID;
              // console.log('Video key:', key);
              return (
                <Video
                  key={key + index}
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              );
            }
          })}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Videos;
