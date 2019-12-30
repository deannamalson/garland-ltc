const navReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SECTIONS":
      return {
        ...state,
        sections: action.newData
      };
    case "UPDATE_ACTIVE":
      return {
        ...state,
        active: action.newActive
      };
    case "SHOW_HEADER":
      return {
        ...state,
        showHeader: true
      };
    case "HIDE_HEADER":
      return {
        ...state,
        showHeader: false
      };
    default:
      return state;
  }
};

export default navReducer;
