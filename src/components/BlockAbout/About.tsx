import TitleSection from "../Title/Title";
import css from "./About.module.scss";
import { hallUrl } from "../../mocks/mocks";

const About = () => {
  return (
    <section className={css.about}>
      <TitleSection title="О студии"/>
      <div className={css.text}>
        <p>
          Следует отметить, что существующая теория создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий
          с учётом комплекса новых принципов формирования
          материально-технической и кадровой базы. Мы вынуждены отталкиваться от
          того, что понимание сути ресурсосберегающих технологий, в своём
          классическом представлении, допускает внедрение вывода текущих
          активов. Учитывая ключевые сценарии поведения, дальнейшее развитие
          различных форм деятельности предполагает независимые способы
          реализации прогресса профессионального сообщества. Современные
          технологии достигли такого уровня, что начало повседневной работы по
          формированию позиции позволяет оценить значение укрепления моральных
          ценностей. Как принято считать, тщательные исследования конкурентов
          призывают нас к новым свершениям, которые, в свою очередь, должны быть
          преданы социально-демократической анафеме. Разнообразный и богатый
          опыт говорит нам, что сплочённость команды профессионалов однозначно
          фиксирует необходимость вывода текущих активов. Господа, глубокий
          уровень погружения играет определяющее значение для существующих
          финансовых и административных условий.
        </p>
      </div>
      <div className={css.galerry}>
        {hallUrl.map((item) => {
          return (
            <div key={item.id} className={css.container}>
              <img
                
                src={item.url}
                alt="Galerry"
                className={css.photo}
              />
              <h2 className={css.caption}>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
