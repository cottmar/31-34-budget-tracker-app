const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]; // return new copy of state. empty state which is an empty array
      // when it includes the payload, the create will work.
    case 'CATEGORY_UPDATE':
      return state.map(category => (category.id === payload.id ? payload : category));
    case 'CATEGORY_REMOVE':
      return state.filter(category => category.id !== payload.id);
    default:
      return state;
  }
};
