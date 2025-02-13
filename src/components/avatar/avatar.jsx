import PropTypes from 'prop-types';

import styles from './avatar.module.css';


Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export function Avatar ({ src, hasBorder = true }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}