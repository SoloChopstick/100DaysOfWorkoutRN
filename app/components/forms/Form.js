import React from "react";

import { Formik } from "formik";

function Form({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/*
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
        */}
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
