import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import c from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .required("Required"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    actions.resetForm();
  };

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={ContactSchema}
  >
    {({ isSubmitting }) => (
      <Form className={c.form}>
        <label className={c.label} htmlFor={nameFieldId}>
          Name
        </label>
        <div className={c.inputBlock}>
          <Field
            className={c.input}
            type='text'
            name='name'
            id={nameFieldId}
          />
          <ErrorMessage
            className={c.error}
            name='name'
            component='div'
          />
        </div>

        <label className={c.label} htmlFor={numberFieldId}>
          Number
        </label>
        <div className={c.inputBlock}>
          <Field
            className={c.input}
            type='tel'
            inputMode='tel'
            name='number'
            id={numberFieldId}
          />
          <ErrorMessage
            className={c.error}
            name='number'
            component='div'
          />
        </div>

        <button
          className={c.formButton}
          type='submit'
          disabled={isSubmitting}
        >
          Add contact
        </button>
      </Form>
    )}
  </Formik>
  );
};

export default ContactForm;
