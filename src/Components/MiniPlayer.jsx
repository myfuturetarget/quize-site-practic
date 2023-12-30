import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import classes from '../assets/css/MiniPlayer.module.css';

const MiniPlayer = ({ id }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  let { state } = useLocation();

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function handleMiniplayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.floatingBtn} ${classes.miniPlayer}`}
      ref={buttonRef}
    >
      <i
        className={`fa-solid fa-circle-play ${classes.open}`}
        onClick={handleMiniplayer}
      ></i>
      <i
        className={`fa-solid fa-xmark ${classes.close}`}
        onClick={handleMiniplayer}
      ></i>
      <ReactPlayer
        url={videoUrl}
        width={'292px'}
        height={'168px'}
        playing={status}
        controls
      />
      <p>{state.some}</p>
    </div>
  );
};

export default MiniPlayer;
