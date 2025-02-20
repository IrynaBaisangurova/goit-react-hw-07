import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const id = useId();

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.searchContainer}>
      <label className={css.searchText } htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={handleSearch}
        className={css.input}
        name="value"
        id={id}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
