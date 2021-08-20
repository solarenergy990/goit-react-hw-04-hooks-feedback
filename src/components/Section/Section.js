import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = (props) => {
  const { title, children } = props;
  return (
    <section className={s.section}>
      {title.trim() && <h2 className={s.title}>{title}</h2>}
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
