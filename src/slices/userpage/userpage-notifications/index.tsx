import { UserNotificationsList } from '../../../components/user-notifications-list';
import { NotificationsControl } from '../../../components/user-notifications-control';
import { UserSubscribe } from '../../../components/user-subscribe';

const UserNotificationsSlice = () => {
  return (
    <div className='user__notifications'>
      <NotificationsControl />
      <UserNotificationsList />
      <UserSubscribe />
    </div>
  );
};

export default UserNotificationsSlice;
