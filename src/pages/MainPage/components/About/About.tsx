import TitleSection from "../../../../components/Title/Title";
import css from "./About.module.scss";
import { hallsData } from "../../../../mocks/mocks";
import CardHalls from "../../../../components/CardHalls";

const About = () => {
  return (
    <section className={css.about}>
      <TitleSection title="О студии" />
      <p className={css.text}>
        Следует отметить, что существующая теория создаёт необходимость
        включения в производственный план целого ряда внеочередных мероприятий с
        учётом комплекса новых принципов формирования материально-технической и
        кадровой базы. Мы вынуждены отталкиваться от того, что понимание сути
        ресурсосберегающих технологий, в своём классическом представлении,
        допускает внедрение вывода текущих активов. Учитывая ключевые сценарии
        поведения, дальнейшее развитие различных форм деятельности предполагает
        независимые способы реализации прогресса профессионального сообщества.
        Современные технологии достигли такого уровня, что начало повседневной
        работы по формированию позиции позволяет оценить значение укрепления
        моральных ценностей. Как принято считать, тщательные исследования
        конкурентов призывают нас к новым свершениям, которые, в свою очередь,
        должны быть преданы социально-демократической анафеме. Разнообразный и
        богатый опыт говорит нам, что сплочённость команды профессионалов
        однозначно фиксирует необходимость вывода текущих активов. Господа,
        глубокий уровень погружения играет определяющее значение для
        существующих финансовых и административных условий.
      </p>
      <div className={css.galerry}>
        {hallsData.map((item) => {
          return <CardHalls hall={item} />;
        })}
      </div>
    </section>
  );
};

export default About;
