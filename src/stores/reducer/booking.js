const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  msg: '',
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKING_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case 'BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'BOOKING_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default booking;
