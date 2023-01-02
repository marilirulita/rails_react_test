import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "./redux/index";

const Search = ({name, id, price}) => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.search.itemsList);
  console.log(itemsList);

  const addToCart = () => {
    dispatch(searchActions.addToSearch({name, id, price}));
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={addToCart} >Add to cart</button>
    </div>
  );
}

export default Search;