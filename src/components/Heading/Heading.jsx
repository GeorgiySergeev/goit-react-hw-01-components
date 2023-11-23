import PropTypes from 'prop-types';
import css from './heading.module.css';

export function Heading({ title, children }) {
  return (
    <div>
      <h1 className={`${css.heading}`}>{title}</h1>
      <h3 className={`${css.underHeading}`}>{children}</h3>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
