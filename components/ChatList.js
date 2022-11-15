import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ChatList = ({ title, detail, onClickFunction, onDelFunction }) => {
  if (typeof detail === "undefined") {
    return;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onClickFunction}>
      <View style={styles.textView}>
        <View>
          {title === null ? (
            <Text style={styles.titleNullText}>{"Unknown"}</Text>
          ) : (
            <Text style={styles.titleText}>{title}</Text>
          )}

          <Text style={styles.detailText} numberOfLines={1}>
            {detail}
          </Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={onDelFunction}>
          <Image
            source={require("../assets/Problem/chat/delete_icon.png")}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
    marginHorizontal: 5,
    paddingHorizontal: 18,
    paddingVertical: 3,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "rgba(211, 211, 211, 0.5)",
  },
  textView: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "AbhayaLibre-Bold",
  },
  titleNullText: {
    fontSize: 18,
    fontFamily: "AbhayaLibre-Bold",
    color: "#808080"
  },
  detailText: {
    fontSize: 14,
    fontFamily: "AbhayaLibre-Medium",
  },
  iconView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  icon: {
    resizeMode: "contain",
    width: 50,
    height: 33,
  },
});

export default ChatList;
