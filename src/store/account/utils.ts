import axios from 'axios';

import { localStorageGetItem, localStorageSetItem } from '../localStore';

const getUserInfo = async (uid: string) => {
  const data = localStorageGetItem('userInfo') || '';
  let userInfo: any = null;
  if (!data) {
    const res = await axios.post('/.netlify/functions/getUserInfo', {
      uid,
    });

    userInfo = res?.data?.userInfo;
    if (userInfo) {
      localStorageSetItem('userInfo', JSON.stringify(userInfo));
    }
  } else {
    userInfo = JSON.parse(data);
  }
  return userInfo;
};
