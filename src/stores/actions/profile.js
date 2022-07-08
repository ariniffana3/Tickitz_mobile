import axios from '../../utils/axios';

export const dataUser = id => {
  console.log(typeof id);
  return {
    type: 'PROFILE',
    payload: axios.get('user/4'),
  };
};
