import css from './heading.module.css';
export function Heading({ title, children, className }) {
  return (
    <div>
      <h1 className={`${css.heading}`}>{title}</h1>
      <h2>{children}</h2>
    </div>
  );
}
