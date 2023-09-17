import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/store/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter_wrapper}>
      <label className={css.filter_label}>Filter</label>
      <input
        type="text"
        onChange={e => {
          dispatch(setStatusFilter(e.currentTarget.value));
        }}
        className={css.filter_input}
        placeholder="example: Rosie"
      />
    </div>
  );
};
