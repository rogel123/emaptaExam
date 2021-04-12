const update = (state, action) => {
  const { data } = action.payload;
  const filteredState = state.map((item) => {
    if (item.id === data.id) {
      return { ...item, ...data };
    }
    return item;
  });
  return filteredState;
};

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload.data];
    case "DELETE":
      return state.filter((item) => action.payload.id !== item.id);
    case "UPDATE":
      return update(state, action);
    default:
      return state;
  }
};
export default contactReducer;
