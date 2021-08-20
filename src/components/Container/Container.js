import React from "react";
import PropTypes from "prop-types";
import s from "../Container/Container.module.css";

const Container = (props) => {
  const { children } = props;
  return <div className={s.mainContainer}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
