export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});
export const removeArticle = id => ({
  type: "REMOVE_ARTICLE",
  payload: id
});

//qd on va faire props.dispatch(removeArticle(12))<--indice dans le tableau ou
//props.dispatch(removeArticle({name: 'objet1', price: 20.99})) -->{name: 'objet1', price: 20.99} = payload
