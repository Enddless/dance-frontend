import { collection, getDocs } from '@firebase/firestore';
import db from '../firebase/config.js';
import { IUser } from '../types/user.js';

const getUsers = async (): Promise<IUser[]> => {
  const layoutsCollectionDB = collection(db, 'users');
  const response = await getDocs(layoutsCollectionDB);

  const users: IUser[] = response.docs.map((doc) => ({
    userId: doc.data().userId,
    firstName: doc.data().firstName,
    lastName: doc.data().lastName,
    specialty: doc.data().specialty,
    avatar: doc.data().avatar
  }));

  return users;
};

const userService = {
  getUsers
};

export default userService;
