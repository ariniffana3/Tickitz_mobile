const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  msg: '',
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case 'PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'PROFILE_REJECTED': {
      console.log(action.data);
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

export default profile;
