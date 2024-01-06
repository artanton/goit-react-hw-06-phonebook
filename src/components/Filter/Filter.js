import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './FilterStyled';
import { filtering } from '../../redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filt.filter);
  return (
    <FilterStyled
      type="text"
      value={filter}
      onChange={evt => dispatch(filtering(evt.target.value))}
    />
  );
};