import PropTypes from 'prop-types';
import css from './statistics.module.css';
export function Statistic(props) {
  const { title, stats } = props;
  return (
    <section className={`${css.statistics}`}>
      <h2 className={`${css.title}`}>{title}</h2>

      <ul className={`${css.statList}`}>
        {stats.map(item => (
          <li
            className={`${css.item}`}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}>
            <span className={`${css.label}`}>{item.label}</span>
            <span className={`${css.percentage}`}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
