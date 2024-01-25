import TitleSection from "../../../../components/Title/Title";
import css from "./About.module.scss";
// import { aboutStudio, hallsData } from "../../../../mocks/mocks";
import CardHalls from "../../../../components/CardHalls";
import { useAppSelector } from "../../../../services/type-service";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../const/route";

const About = () => {
  const main = useAppSelector((state) => state.main.mainPage);
  const atelieData = main?.Atelie;
  const description = atelieData?.description;
  const hallsData = main?.Halls;

  const lengthMoreDefault = hallsData && hallsData?.length > 3;
  const classNameList = classNames(css.galerry, {
    [css.tile]: lengthMoreDefault,
  });

  return (
    <section className={css.about}>
      <TitleSection title="О студии" />
      <div className={css.text}>
        <p>
          {atelieData !== null ? (
            `${description}`
          ) : (
            <p className={css.atention}>
              Здесь еще нет описания. Добавить его можно в личном кабинете
              <Link to={`${AppRoute.AdministratorArea}/about`}> администратора</Link>
            </p>
          )}
        </p>
      </div>
      <div className={classNameList}>
        {hallsData ? (
          hallsData.map((item) => {
            return (
              <CardHalls
                hall={item}
                key={item.IdHall}
                isMainPage={lengthMoreDefault}
              />
            );
          })
        ) : (
          <p className={css.atention}>
            Здесь еще нет залов. Добавить их можно в личном кабинете
            <Link to={`${AppRoute.AdministratorArea}/halls`}>  администратора</Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default About;
