import css from "./styles.module.scss";

const SettingsAll = () => {
  return (
    <div className={css.content}>
      <p>Текущая тема:</p>
      <div className={`${css.theme} ${css.seventhTheme} ${css.currentTheme}`}>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
      </div>
      <p>Чтобы применить другую тему нажмите на нее</p>
      <div className={css.wrapper}>
        <div className={`${css.theme} ${css.secondaryTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.thirdTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.fourthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.fifthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.sixthTheme}`}>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
          <div className={css.tile}></div>
        </div>
        <div className={`${css.theme} ${css.seventhTheme}`}>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
        <div className={css.tile}></div>
      </div>
      </div>
    </div>
  );
};

export default SettingsAll;
