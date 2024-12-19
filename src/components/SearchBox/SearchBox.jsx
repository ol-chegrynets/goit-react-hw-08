import { useId } from 'react';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from '../../redux/filters/selectors';
import { setFilterValue } from '../../redux/filters/slice';

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterValue);
  const handleFilter = value => {
    dispatch(setFilterValue(value));
  };
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={s.searchBoxInput}
        type="text"
        name="search"
        id={searchInputId}
        value={filterName}
        onChange={e => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
