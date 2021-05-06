import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import { Button } from "antd";
import { PauseCircleTwoTone, PlayCircleTwoTone} from "@ant-design/icons";
import { convertCurrentTime} from 'utils/helpers';
import waveSvg from 'assets/img/wave.svg';

const MessageAudio = ({ audioSrc }) => {
    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
  
    const togglePlay = () => {
      if (!isPlaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    };
  
    useEffect(() => {
      audioElem.current.volume = '0.01';
      audioElem.current.addEventListener(
        'playing',
        () => {
          setIsPlaying(true);
        },
        false,
      );
      audioElem.current.addEventListener(
        'ended',
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        },
        false,
      );
      audioElem.current.addEventListener(
        'pause',
        () => {
          setIsPlaying(false);
        },
        false,
      );
      audioElem.current.addEventListener('timeupdate', () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100);
      });
    }, []);
  
    return (
      <div className="message__audio">
        <audio ref={audioElem} src="../../assets/Comatose   Skillet.mp3" preload="auto" />
        <div className="message__audio-progress" style={{ width: progress + '%' }} />
        <div className="message__audio-info">
          <div className="message__audio-btn">
            <Button onClick={togglePlay} shape="circle" icon={isPlaying ? <PauseCircleTwoTone /> : <PlayCircleTwoTone />} size="large" />
          </div>
          <div className="message__audio-wave">
            <img src={waveSvg} alt="Wave svg" />
          </div>
          <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
        </div>
      </div>
    );
  };

  MessageAudio.propTypes = {
  className: PropTypes.string
};

export default MessageAudio;
