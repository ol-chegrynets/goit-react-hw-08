import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import s from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const RegisterFormValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required!')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Password must contain at least 8 characters')
      .max(100, 'Password must be less than 100 characters'),
  });
  const handleFormSubmit = value => {
    dispatch(register(value));
  };

  return (
    <>
      <h2 className={s.title}>make an authorization</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={RegisterFormValidationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Enter your name</span>
            <Field type="text" name="name" placeholder="Simon" />
            <ErrorMessage
              className={s.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={s.label}>
            <span>Email</span>
            <Field
              type="text"
              name="email"
              placeholder="test.example@gmail.com"
            />
            <ErrorMessage
              className={s.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={s.label}>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={s.errorText}
              name="password"
              component="span"
            />
          </label>

          <button className={s.submitBtn} type="submit">
            Sign Up
          </button>
          {error && (
            <p className={s.errorText}>Oops, some error occurred... {error}</p>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
