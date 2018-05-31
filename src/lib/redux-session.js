// export default (store, next, action) -- this is how you can conceptualize the curry func
export default store => next => (action) => {
  // make sure the chain continues. we want to see what happens after you update the store
  // these lines happen before I update the store
  const result = next(action);
  // these lines happen AFTER I update the store. WHy? because I called next above. 
  // this means all of the nexts will be called, and then I will be coming back
  const state = store.getState();
  // save everything that I get in the state into local storage

  for (const key in state) { // eslint-disable-line 
    if (Object.prototype.hasOwnProperty.call(state, key)) { // .call isso the ctx of
      //  the property =state
      localStorage[key] = JSON.stringify(state[key]);
    }
  }
  return result;
};
