import PropTypes from 'prop-types';

import s from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => (
  <div>
    <ul className={s.list}>
      <li>
        <p>Good:<span className={s.textEl}>{good}</span></p>
      </li>
      <li>
        <p>Neutral:<span className={s.textEl}>{neutral}</span></p>
      </li>
      <li>
        <p>Bad:<span className={s.textEl}>{bad}</span></p>
      </li>
      <li>
        <p>Total:<span className={s.textEl}>{total}</span></p>
      </li>
      <li>
        <p>Positive feedback:<span className={s.textEl}>{positivePercentage}&#37;</span></p>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
