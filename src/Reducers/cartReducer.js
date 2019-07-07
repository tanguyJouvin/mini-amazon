const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ARTICLE':
     console.log(action.payload);
      return state; 
    case 'REMOVE_ARTICLE':
      return state;
    default:
      return state;
  }
}

export default cartReducer;
