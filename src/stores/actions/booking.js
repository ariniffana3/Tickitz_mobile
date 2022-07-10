import axios from '../../utils/axios';

export const booking = data => {
  console.log(data);
  console.log(typeof data);
  return {
    type: 'BOOKING',
    payload: axios.post('booking', data),
  };
};
