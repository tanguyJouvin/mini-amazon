//destructuration
const cartReducer = (state = [], action) => { //2 param  :1 state par défaut du panier, 2 l'action soit action.type et action.payload
  switch(action.type) { // = addArticles ouremoveArticles
    case 'ADD_ARTICLE': // avant on push l'élément ds le tableau
      return [...state, action.payload]; // on fait une copie du state (tableau vide) à laquelle on ajoute action.payload donc l'article {article.name, article.price}
    case 'REMOVE_ARTICLE': // avant on slice l'élément ds le tableau
    let newState = state; //je réattribue ds 1 variable, le state dc le tableau ->contenu du panier actuel
    //autre version slice(0 (index, 1 nbre d'élément supprimé)) + spread operator
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
      //state =[ art1, art2, art3, art4] -> return 1 copie de state [[ art1, art2], [art4]]
    default:
      return state;
  }
}

export default cartReducer;
