import React, { useState } from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  //const [imageUris, setImageUris] = useState([]);
  const imageUris = values[name];
  const handleAdd = (uri) => {
    //setImageUris([...imageUris, uri]);
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    //setImageUris(imageUris.filter(imageUri => imageUri !== uri));
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleRemove(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
