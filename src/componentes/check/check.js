export const checkExistInTheCart = (cart, item)=> {
    return cart.some((a)=> a.id === item.id)
   }