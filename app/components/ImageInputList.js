import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList(imageUris, onAddImage, onRemoveImage) {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUris}
        keyExtractor={(item) => item.uri}
        renderItem={({ item }) => <ImageInput />}
      ></FlatList>
      <ImageInput />
      <Text>YOLO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
});

export default ImageInputList;
