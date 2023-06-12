export const initialState = {
  basket: [],
};
//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      localStorage.setItem(
        "list",
        JSON.stringify([...state.basket, action.item])
      );
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let allList = JSON.parse(localStorage.getItem("list"));
      const index = allList.findIndex((item) => item.id === action.id);

      if (index === -1) {
        return {
          state,
          basket: allList,
        };
      }

      console.log(index + "i");
      console.log(allList);
      allList.splice(index, 1);
      console.log(allList);
      localStorage.setItem("list", JSON.stringify(allList));

      return {
        ...state,
        basket: allList,
      };

    case "CLEAR_ALL_BASKETS":
      let newPosts = state.basket.findIndex((basket) => {
        return action.id !== basket.id;
      });

      return {
        ...state,
        basket: newPosts,
      };

    default:
      return state;
  }
};

export default reducer;
