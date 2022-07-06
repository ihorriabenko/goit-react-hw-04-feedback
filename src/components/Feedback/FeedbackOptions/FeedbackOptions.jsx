import PropTypes from 'prop-types';

import s from './feedback-options.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const item = options.map(el => (
    <li key={el} className={s.item}>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback(`${el}`)}
      >
        {el}
      </button>
    </li>
  ));

  return <ul className={s.list}>{item}</ul>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
