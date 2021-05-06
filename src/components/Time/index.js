import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {format } from 'date-fns'
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => (
  <Fragment>
    {
      format(new Date(date), "HH:mm")
    }
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;
