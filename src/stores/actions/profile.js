import axios from '../../utils/axios';

const dataUser = id => {
  id = id.split('')[1];
  return {
    type: 'PROFILE',
    payload: axios.get(`user/${id}`),
  };
};
export default dataUser;
