const search = (state = {
  isLoading: false,
}, action) => {
  switch (action.type) {
    case 'SEARCH_SET_IS_LOADING': {
      const { isLoading } = action;

      return {
        ...state,
        isLoading,
      };
    }
    default:
      return state
  }
};

export default search;
