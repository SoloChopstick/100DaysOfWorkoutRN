import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Icon from "./Icon";

import defaultStyle from "../config/styles";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    if (!result.granted)
      alert("You need to enable permission to access the library.");
    /*
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library.");
      */
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    //How to delete using the change state function
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        //calling parent to notify of change
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <Icon
            name="camera"
            iconColor={defaultStyle.colors.medium}
            backgroundColor={defaultStyle.colors.light}
            size={50}
            style={styles.icon}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.icon} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 25,
    overflow: "hidden",
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default ImageInput;
