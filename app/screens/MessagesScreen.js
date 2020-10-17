import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
function MessagesScreen(props) {
  //ARRAY DESTRUCTURING BELOW
  /*
  const array = useState(0);
  const count = array[0];
  const setCount = array[1]; //setState
  */

  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    // Delete the message from messages
    //const newMessages = messages.filter((msg) => msg.id !== message.id);
    //setMessages(newMessages);
    setMessages(messages.filter((msg) => msg.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("YOLO", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
