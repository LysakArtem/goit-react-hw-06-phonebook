// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/selectors';
import * as actions from '../redux/actions';
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Find contact by name</h3>
      <input
        placeholder="Что ищем?"
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
        value={filter}
      />
    </>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string,
//   changeFilter: PropTypes.func.isRequired,
// };
