import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ProfileImage({ image, size }) {
  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={image}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileImage;
