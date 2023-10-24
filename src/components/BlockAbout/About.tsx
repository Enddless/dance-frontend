import TitleSection from "../Title/Title";
import css from "./About.module.scss";

const About = () => {
  return (
    <section className={css.about}>
      <TitleSection title="О студии" className={css.title}/>
      <div className={css.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna cras nibh nullam ornare
          facilisis euismod massa venenatis vel. Tempor ut imperdiet scelerisque
          dictumst. Pellentesque accumsan adipiscing quis pulvinar fusce
          pharetra. Proin tellus malesuada nisl nibh sed. Aliquet ultricies
          elementum aliquam viverra parturient luctus. Ultricies velit nullam eu
          non hac tellus congue. Volutpat at nisi urna augue risus in. Id amet
          purus nunc eget. Ut ut mauris vitae hac id. Nisi tempor turpis non
          semper adipiscing commodo.
        </p>
        <p>
          Placerat consequat euismod pulvinar in viverra sed habitasse mattis
          risus. Aliquam dignissim at urna eget consectetur nullam dictum.
          Feugiat sit sed sit id amet cursus aliquam. Sed amet lorem at feugiat
          tortor sed odio sit. Felis curabitur amet nunc iaculis quis et a nisl.
          Vestibulum sagittis elit et tristique eget malesuada ante. In
          elementum vel integer bibendum. Donec tristique amet elit congue non
          vulputate. At orci platea turpis placerat. Iaculis posuere nisl vel
          commodo mauris nam risus quis nunc. Hendrerit ultricies tempor tempor
          integer. Vitae duis integer nisi blandit turpis sit. Sit massa
          bibendum lorem risus proin amet. Ullamcorper integer sed lectus dolor.
        </p>
      </div>
      <img src="" alt="" className={css.photo} />
    </section>
  );
};

export default About;
