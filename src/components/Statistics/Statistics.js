import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.statList}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ title, items }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>Upload stats</h2> : null}
      <StatsList items={items} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

StatsList.propTypes = {
  items: PropTypes.array,
};

StatsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
