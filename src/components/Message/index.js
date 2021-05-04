import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';
import { format } from "date-fns";
import rulocale from 'date-fns/locale/ru';
import "./Message.scss";
import classNames from "classnames";

Moment.locale('en');
const Message = ({ avatar, user, text, date, isMe, isTyping, attachments }) => (
  <div className={classNames("message", { 
    "message--isme": !isMe, 
    "message--is-typing": isTyping,
    "message--image": attachments && attachments.length === 1 })}>
    <div className="message__avatar">
      {date && <span className="message__date">
        {format(new Date(date), "H:mm", { addSuffix: true, locale: rulocale })}
      </span>}
      <img className="avatar" src={avatar} alt={`Avatar ${user.fullname}`} />
    </div>
    <div className="message__content">
      {(text || isTyping) && <div className="message__bubble">
        {text && <p className="message__text">{text}</p>}
        {isTyping && <div className="message__typing">
          <span/><span/><span/>
        </div>}
      </div>}
      <div className="message__attachments">
        {attachments && attachments.map(item => (
          <div className="message__attachments-item">
            <img src={item.url} alt={item.filename} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool
};

export default Message;
