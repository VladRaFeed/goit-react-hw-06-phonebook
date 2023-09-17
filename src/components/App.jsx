import Form from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.global_wrapper}>
      <Form />
      <Filter />
      <ContactsList />
    </div>
  );
}
