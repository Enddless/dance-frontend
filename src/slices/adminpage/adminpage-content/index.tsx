import classNames from 'classnames';
import AboutSettingsSlice from '../adminpage-about';
import ContactsSettingsSlice from '../adminpage-contacts';
import ControlUsersSlice from '../adminpage-usersdata';
import DashboardSettingsSlice from '../adminpage-dashboard';
import HallsSettingsSlice from '../adminpage-halls';
import PolicySettingsSlice from '../adminpage-information';
import BannersSettingsSlice from '../adminpage-banners';
import SettingsAllSlice from '../adminpage-settings-all';
import ReviewSettingsSlice from '../adminpage-review';
import PersonalSettingsSlice from '../adminpage-personal';
import PriceSettingsSlice from '../adminpage-price';

interface IActiveButtonProps {
  isActiveButton: string;
}

export const ContentSlice = ({ isActiveButton }: IActiveButtonProps) => {
  const classNamesList = classNames('admin__content', {
    admin__overlay: isActiveButton === 'contacts'
  });
  return (
    <div className={classNamesList}>
      {isActiveButton === 'about' && <AboutSettingsSlice />}
      {isActiveButton === 'news' && <BannersSettingsSlice />}
      {isActiveButton === 'halls' && <HallsSettingsSlice />}
      {isActiveButton === 'personal' && <PersonalSettingsSlice />}
      {isActiveButton === 'information' && <PolicySettingsSlice />}
      {isActiveButton === 'price' && <PriceSettingsSlice />}
      {isActiveButton === 'dashboard' && <DashboardSettingsSlice />}
      {isActiveButton === 'reviews' && <ReviewSettingsSlice />}
      {isActiveButton === 'contacts' && <ContactsSettingsSlice />}
      {isActiveButton === 'control-users' && <ControlUsersSlice />}
      {isActiveButton === 'settings' && <SettingsAllSlice />}
    </div>
  );
};
