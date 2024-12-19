import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const onAddContact = newContact => {
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!');
      });
  };

  const initialValues = { id: '', name: '', number: '' };
  const nameFieldId = useId();
  const numberFieldId = useId();

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    number: Yup.number()
      .min(7, 'Too Short!')
      .required('Required!')
      .typeError('Enter phone-number!'),
  });

  const handleFormSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={s.form}>
        <div className={s.formInputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={s.formInput}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage
            className={s.formInputErrorMsg}
            name="name"
            component="span"
          />
        </div>
        <div className={s.formInputWrapper}>
          <label htmlFor={numberFieldId}>Phone</label>
          <Field
            className={s.formInput}
            id={numberFieldId}
            type="text"
            name="number"
          />
          <ErrorMessage
            className={s.formInputErrorMsg}
            name="number"
            component="span"
          />
        </div>
        <button className={s.formSbmBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
