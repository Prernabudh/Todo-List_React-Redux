const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        list: state.list.concat(action.input),
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        list: state.list.filter((item) => item.val !== action.value),
      };
    }
    case "COMPLETE_TODO": {
      let tempList = [...state.list];
      tempList.map((item) => {
        if (item.val === action.val) item.done = true;
      });
      return {
        ...state,
        list: tempList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
