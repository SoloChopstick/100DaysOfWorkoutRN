import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppButton from "./AppButton";
import Icon from "./Icon";

import defaultStyle from "../config/styles";

function ImageInput() {
  const [imageUri, setImageUri] = useState();

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
        console.log(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={selectImage}>
      {imageUri === null ? (
        <Icon
          name="camera"
          iconColor={defaultStyle.colors.medium}
          backgroundColor={defaultStyle.colors.light}
          size={100}
          style={styles.icon}
        />
      ) : (
        <Image source={{ uri: imageUri }} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { width: 200, height: 200, borderRadius: 25 },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
});

export default ImageInput;
