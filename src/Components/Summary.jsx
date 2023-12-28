import useImgFetch from '../Hooks/useImgFetch';
import classes from '../assets/css/Summury.module.css';
import scoreImag from '../assets/img/success.png';

const Summary = ({ scoreResult, noq }) => {
  const getKeyword = () => {
    if ((scoreResult / (noq * 5)) * 100 < 50) {
      return 'bad';
    } else if ((scoreResult / (noq * 5)) * 100 < 75) {
      return 'good';
    } else if ((scoreResult / (noq * 5)) * 100 < 100) {
      return 'excellent';
    }
    return 'very good';
  };
  const { result, error, loading } = useImgFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    'GET',
    {
      Authorization: import.meta.env.VITE_REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : scoreImag;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is {scoreResult} out of {noq * 5} !
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}
      {error && <div className={classes.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Result side image" />
        </div>
      )}
    </div>
  );
};

export default Summary;
