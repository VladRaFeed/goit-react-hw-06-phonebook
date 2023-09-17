// import { useState } from 'react';
import css from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/store/contactsSlice/contactsSlice';

export default function Form() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <section className={css.form_section}>
      <h1 className={css.form_title}>Phonebook</h1>
      <form className={css.main_form} onSubmit={handleSubmit}>
        <label className={css.form_label}>Name</label>
        <input
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Contact-name"
          required
        />
        <label className={css.form_label}>Phone number</label>
        <input
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone-number"
          required
        />
        <button type="submit" className={css.from_btn}>
          Add contact
        </button>
      </form>
    </section>
  );
}
