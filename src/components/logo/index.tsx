import { AppRoute } from '../../const/route';
import { Link } from 'react-router-dom';
import { API_URL } from '../../services/api';
import { useAppSelector } from '../../services/type-service';
import { useEffect, useState } from 'react';

const Logo = () => {
  const logotypeData = useAppSelector((state) => state.main.mainPage?.Atelie.photoLogo);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    if (logotypeData && logotypeData !== '') {
      setLogoUrl(`${API_URL}${logotypeData}?v=${Math.random()}`);
    }
  }, [logotypeData]);

  return (
    <Link to={AppRoute.Root} key={logoUrl}>
      {logoUrl && (
        <img
          src={logoUrl}
          alt='Logotype'
          width={250}
          height={60}
          loading='lazy'
          className='logo__image'
        />
      )}
    </Link>
  );
};

export default Logo;
