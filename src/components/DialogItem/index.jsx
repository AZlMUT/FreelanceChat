import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { Link } from 'react-router-dom';

import { Avatar } from '../';




const DialogItem = ({
  _id,
  undread,
  created_at,
  text,
  isMe,//
  currentDialogId,//
  partner,
  lastMessage,
  userId,//
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': partner.isOnline,
        'dialogs__item--selected': currentDialogId === _id,
      })}>
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullname}</b>
          <span>12:20</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? '+9' : lastMessage.undread}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
