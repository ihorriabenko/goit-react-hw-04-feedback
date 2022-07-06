import PropTypes from 'prop-types';

import s from './notification.module.scss';

const Notification = ({message}) => (
  <>
    <p className={s.text}>{message}</p>
  </>
)

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
