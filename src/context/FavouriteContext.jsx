
import { createContext, useState } from 'react';
import { products } from '../const/products';

export const FavouriteContext = createContext();


export const FavouriteContextProvider = ({children}) => {
  const [favourite , setFavourite] = useState([]);

  const addToFavourite = (id) => {
    let newFavourite;

    const product = products.find(pr => pr.id === id);
    const checkedInFavourite = favourite.find(pr => pr.id === id); 

    if(checkedInFavourite) {
      newFavourite = favourite.map(pr => {
        if(pr.id === id){
          pr.quantity++
        }
        return pr;
      })
    }else{
      product.quantity = 1;
      newFavourite = [...favourite , product]
    }
    setFavourite(newFavourite)
  }


  const state = {favourite , addToFavourite}

  return (
    <FavouriteContext.Provider value={state}>
      {children}
    </FavouriteContext.Provider>
  );
}


export default FavouriteContextProvider