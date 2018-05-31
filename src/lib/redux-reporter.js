// export default store => next => (action) => {
//   console.log('__ACTION__', action);
//   const result = next(action);
//   console.log('__STATE__', store.getState());
//   return result;
// } catch (error) {
//   // gracefully handle the error in a way the user will understand
//   console.log('__ERROR__', error);
//   action.error = error;
//   return action;
// } 

