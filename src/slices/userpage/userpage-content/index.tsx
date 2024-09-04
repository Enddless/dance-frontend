import UserTicketsSlice from '../userpage-tickets/index';
import UserSettingsSlice from '../userpage-settings';
import AddReviewSlice from '../userpage-addreview';
import UserRecordSlice from '../userpage-record';
import UserPasswordSlice from '../userpage-password';
import UserNotificationsSlice from '../userpage-notifications';

interface IActiveButtonProps {
  currentButton: string;
}

function ContentUserSlice({ currentButton }: IActiveButtonProps) {
  return (
    <>
      {currentButton === 'settings' && <UserSettingsSlice />}
      {currentButton === 'tickets' && <UserTicketsSlice />}
      {currentButton === 'notifications' && <UserNotificationsSlice />}
      {currentButton === 'record' && <UserRecordSlice />}
      {currentButton === 'changepass' && <UserPasswordSlice />}
      {currentButton === 'review' && <AddReviewSlice />}
    </>
  );
}

export default ContentUserSlice;
