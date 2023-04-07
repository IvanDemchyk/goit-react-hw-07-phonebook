import { useDispatch } from 'react-redux';

import { filterList } from 'redux/filterSlice';
import { FilterBox, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <FilterLabel htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(filterList(e.target.value))}
        />
      </FilterLabel>
    </FilterBox>
  );
};
