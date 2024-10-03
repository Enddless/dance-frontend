import classNames from 'classnames';
import AboutSettings from '../../pages/AreaAdminPage/components/Layout/components/About';
import ContactsSettings from '../../pages/AreaAdminPage/components/Layout/components/Contacts';
import ControlUsers from '../../pages/AreaAdminPage/components/Layout/components/Control-users';
import DashboardSettings from '../../pages/AreaAdminPage/components/Layout/components/Dashboard';
import Halls from '../../pages/AreaAdminPage/components/Layout/components/Halls';
import LegalInformation from '../../pages/AreaAdminPage/components/Layout/components/Information';
import News from '../../pages/AreaAdminPage/components/Layout/components/News';
import Personal from '../../pages/AreaAdminPage/components/Layout/components/Personal';
import PriceSettings from '../../pages/AreaAdminPage/components/Layout/components/Price';
import ReviewSettings from '../../pages/AreaAdminPage/components/Layout/components/Review';
import SettingsAll from '../../pages/AreaAdminPage/components/Layout/components/SettingsAll';

interface IActiveButtonProps {
  isActiveButton: string;
}

export const ContentSlice = ({ isActiveButton }: IActiveButtonProps) => {
  const classNamesList = classNames('admin-page__content', {
    'admin-page__overlay': isActiveButton === 'contacts'
  });
  return (
    <div className={classNamesList}>
      {isActiveButton === 'about' && <AboutSettings />}
      {isActiveButton === 'news' && <News />}
      {isActiveButton === 'halls' && <Halls />}
      {isActiveButton === 'personal' && <Personal />}
      {isActiveButton === 'information' && <LegalInformation />}
      {isActiveButton === 'price' && <PriceSettings />}
      {isActiveButton === 'dashboard' && <DashboardSettings />}
      {isActiveButton === 'reviews' && <ReviewSettings />}
      {isActiveButton === 'contacts' && <ContactsSettings />}
      {isActiveButton === 'control-users' && <ControlUsers />}
      {isActiveButton === 'settings' && <SettingsAll />}
    </div>
  );
};
