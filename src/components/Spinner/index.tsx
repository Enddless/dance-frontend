import css from "./styles.module.scss";

function Spinner() {
  return (
    <div className={css.center}>
      <div className={css.ring}></div>
      <span>Loading...</span>
    </div>
  );
}

export default Spinner;
