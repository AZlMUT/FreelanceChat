import React from "react";
import PropTypes from "prop-types";
import "./Avatar.scss";

const ava = (id) => {
  //const id = Math.random(0,1000);
  return `https://source.unsplash.com/100x100/?random=${id}&face,portrait,family,girl`;
};

const Avatar = ({ user, avatar }) => {
  return (
    <img 
    className="avatar" 
    src={avatar} 
    alt={`Avatar`} 
    />
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
