import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button } from 'antd';
import { Emoji } from 'emoji-mart';
import reactStringReplace from 'react-string-replace';
import { convertCurrentTime, isAudio } from 'utils/helpers';
import { EyeOutlined, EllipsisOutlined} from '@ant-design/icons';


import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import { Time, IconReaded, Avatar, MessageAudio } from 'components';

import './Message.scss';


const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  readed,
  attachments,
  isTyping,
  onRemoveMessage,
  setPreviewImage,
}) => {
  const renderAttachment = item => {
    if (item.ext !== 'webm') {
      return (
        <div
          key={item._id}
          onClick={() => setPreviewImage(item.url)}
          className="message__attachments-item">
          <div className="message__attachments-item-overlay">
            <EyeOutlined style={{ color: 'white', fontSize: 18 }}/>
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      );
    } else {
      return <MessageAudio key={item._id} audioSrc={item.url} />;
    }
  };

  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--is-audio': isAudio(attachments),
        'message--image': !isAudio(attachments) && attachments && attachments.length === 1 && !text,
      })}>
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={readed} />
        <Popover
          content={
            <div>
              <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
            </div>
          }
          trigger="click">
          <div className="message__icon-actions">
            <Button type="link" shape="circle" icon={<EllipsisOutlined />} />
          </div>
        </Popover>
        <div className="message__avatar">
        {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
          <Avatar avatar={avatar} />
        </div>
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && (
                <p className="message__text">
                  {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                    <Emoji key={i} emoji={match} set="apple" size={16} />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {false && <MessageAudio audioSrc={null} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => renderAttachment(item))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
