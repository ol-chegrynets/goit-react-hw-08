import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const initialValues = { id: '', name: '', number: '' };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid(10);
  const dispatch = useDispatch();

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    number: Yup.number().min(7, 'Too Short!').required('Required!'),
  });

  const handleFormSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: contactId,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formInputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formInput}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage
            className={css.formInputErrorMsg}
            name="name"
            component="span"
          />
        </div>
        <div className={css.formInputWrapper}>
          <label htmlFor={numberFieldId}>Phone</label>
          <Field
            className={css.formInput}
            id={numberFieldId}
            type="text"
            name="number"
          />
          <ErrorMessage
            className={css.formInputErrorMsg}
            name="number"
            component="span"
          />
        </div>
        <button className={css.formSbmBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
