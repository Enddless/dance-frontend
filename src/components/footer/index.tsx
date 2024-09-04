import Logo from '../logo';
import sprite from 'public/icons/sprite.svg';
import SocialLinks from '../soc1al-links';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { pagesFooter } from '../../const/const';
import { useAppSelector } from '../../services/type-service';
import policy from 'public/terms/Политика.pdf';

const Footer = () => {
  const cityData = useAppSelector((state) => state.main.mainPage?.City);
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='footer'>
      <div className='footer__inner container'>
        <div className='footer__logo logo' onClick={scrollHandler}>
          <Logo />
        </div>

        <nav className='footer__menu'>
          <ul className='footer__menu-list'>
            <li className='footer__menu-item'>
              <Link to='/' className='footer__menu-link'>
                Скачать приложение
              </Link>
            </li>
            <li className='footer__menu-item'>
              <ul>
                {pagesFooter.map((page) => {
                  const check =
                    page.title === 'Услуги и цены' || page.title === 'Контакты';
                  return (
                    <li key={page.id}>
                      {check ? (
                        <HashLink smooth to={page.url} className='footer__menu-link'>
                          {page.title}
                        </HashLink>
                      ) : (
                        <Link to={page.url} className='footer__menu-link'>
                          {page.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className='footer__menu-item'>
              <span>
                <a href={policy} target='_blank'>
                  Юридическая информация
                </a>
              </span>
            </li>
          </ul>
        </nav>

        <div className='footer__contacts'>
          <div className='footer__contacts-location'>
            <div style={{ width: '24' }}>
              <svg width='25' height='25' viewBox='0 0 25 25'>
                <use xlinkHref={`${sprite}#location`}></use>
              </svg>
            </div>
            <p>
              {cityData?.title} <br />c 09:00 до 21:00
            </p>
          </div>

          <div className='footer__contacts-phone'>
            <svg width='25' height='25' viewBox='0 0 25 25'>
              <use xlinkHref={`${sprite}#phone`}></use>
            </svg>
            <p>
              <a href='tel:+74957887750'>+7 (495) 788-77-50</a>
            </p>
          </div>

          <div className='footer__contacts-socialBlock'>
            <p>Мы в социальных сетях:</p>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className='footer__organization container'>
        <Link to='https://pnpl.site/'>Проект разработан в рамках Pineapple Practice</Link>
      </div>
    </div>
  );
};

export default Footer;
