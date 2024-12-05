import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getNameFilter, setStatusFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const searchValue = useSelector(getNameFilter);

  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="search"
        id={searchInputId}
        value={searchValue}
        onChange={e => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
