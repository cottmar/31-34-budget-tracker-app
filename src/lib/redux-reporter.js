export default store => next => (action) => {
  try {
    console.log('__ACTION__', action); // eslint-disable-line
    const result = next(action);
    console.log('__STATE__', store.getState()); // eslint-disable-line
    return result;
  } catch (error) {  
  // gracefully handle the error in a way the user will understand
    console.log('__ERROR__', error); // eslint-disable-line
    action.error = error;
    return action;
  }
};
